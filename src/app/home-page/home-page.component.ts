import { Component, OnInit, OnDestroy } from "@angular/core";
import { Pokemon, PokemonList } from "../shared/interface";
import { PokemonService } from "../shared/pokemon.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit, OnDestroy {
  pokemonList: PokemonList[] = [];
  private id = 1;
  private pokemonList$: Observable<PokemonList[]> = this.pokemonService
    .fetchPages()
    .pipe(
      map((x: Pokemon) => {
        this.pokemonList = [...this.pokemonList, ...x.results];
        if (this.pokemonList.length === 180) {
          this.pokemonList = this.pokemonList.slice(0, 150).map((res) => ({
            ...res,
            id: this.id++,
          }));
        }
        return this.pokemonList;
      })
    );
  flat: boolean = false;
  searchText: string = "";

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonList$.subscribe();
  }

  ngOnDestroy() {}
}
