import { Component, OnInit, OnDestroy } from "@angular/core";
import { PokemonService } from "../shared/pokemon.service";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
import {
  PokemonDetails,
  Ability,
  Moves,
  MovesInfoText,
  EffectEntries,
} from "../shared/interface";

import { listAnimation, bounceModal } from "../shared/animations";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"],
  animations: [listAnimation, bounceModal],
})
export class ListPageComponent implements OnInit, OnDestroy {
  infoPokemon: PokemonDetails;
  ability: Ability[] = [];
  moves: Moves[] = [];
  pokemonMoves: MovesInfoText[] = [];
  abilityEffects: EffectEntries[] = [];
  num: number = 0;
  listopen: boolean = false;
  idList: number = 0;
  modal: boolean = false;
  listAnimation: any;
  deskTopBounceModal: any;
  mobilebounce: any;
  allSub: Subscription;
  moveSub: Subscription;
  modalSub: Subscription;
  showListOfPokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.allSub = this.route.params
      .pipe(
        switchMap((params: Params) => {
          // console.log(params);
          return this.pokemonService.fetchUrlInfo(params["id"]);
        })
      )
      .subscribe((data) => {
        // console.log(data);
        this.infoPokemon = data;
        this.num = data.id;
        this.ability = data.abilities;
        this.moves = data.moves.slice(0, 5);
      });
  }
  getMoves(url: string, id: number) {
    if (!this.listopen || this.idList !== id) {
      this.moveSub = this.pokemonService.fetchMoves(url).subscribe((data) => {
        // console.log(data.effect_entries);
        this.pokemonMoves = data.effect_entries;
        this.idList = id;
        this.listopen = true;
      });
    } else {
      this.listopen = false;
    }
  }

  openModalFetch(url: string) {
    this.modalSub = this.pokemonService
      .fetchAbilities(url)
      .subscribe((data) => {
        this.abilityEffects = data.effect_entries;
      });

    this.modal = true;
  }

  closeModal() {
    this.modal = false;
    this.abilityEffects = [];
  }

  ngOnDestroy() {
    if (this.allSub) {
      this.allSub.unsubscribe();
    }

    if (this.moveSub) {
      this.moveSub.unsubscribe();
    }
    if (this.modalSub) {
      this.modalSub.unsubscribe();
    }
  }
}
