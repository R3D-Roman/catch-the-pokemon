import { Component, OnInit, OnDestroy } from "@angular/core";
import { PokemonService } from "../shared/pokemon.service";
import { ActivatedRoute, Params } from "@angular/router";
import { delay, map, switchMap, take, tap } from "rxjs/operators";
import {
  MovesInfoText,
  EffectEntries,
  PokemonAbilities,
} from "../shared/interface";

import { listAnimation, bounceModal } from "../shared/animations";
import { Observable } from "rxjs";

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"],
  animations: [listAnimation, bounceModal],
})
export class ListPageComponent implements OnInit, OnDestroy {
  pokemonMoves: MovesInfoText[] = [];
  pokemonAbilities$: Observable<PokemonAbilities> = this.route.params.pipe(
    switchMap((params: Params) =>
      this.pokemonService.fetchUrlInfo(params["id"]).pipe(
        map((x: PokemonAbilities) => ({
          ...x,
          moves: x.moves.slice(0, 5),
        })),
        delay(500)
      )
    )
  );
  abilityEffects: EffectEntries[] = [];
  listOpen = false;
  idList = 0;
  modal = false;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  getMoves(url: string, id: number) {
    if (!this.listOpen || this.idList !== id) {
      this.pokemonService
        .fetchMoves(url)
        .pipe(take(1))
        .subscribe((data) => {
          this.pokemonMoves = data.effect_entries;
          this.idList = id;
          this.listOpen = true;
        });
    } else {
      this.listOpen = false;
    }
  }

  openModalFetch(url: string) {
    this.pokemonService
      .fetchAbilities(url)
      .pipe(take(1))
      .subscribe((data) => {
        this.abilityEffects = data.effect_entries;
      });

    this.modal = true;
  }

  closeModal() {
    this.modal = false;
    this.abilityEffects = [];
  }
}
