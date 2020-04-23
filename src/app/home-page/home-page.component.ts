import { Component, OnInit, OnDestroy } from "@angular/core";
import { Pokemon, PokemonList } from "../shared/interface";
import { PokemonService } from "../shared/pokemon.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit, OnDestroy {
  list: Pokemon;
  pokemonList: PokemonList[] = [];
  flat: boolean = false;
  pSub: Subscription;
  searchText: string = "";

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.fetchPages().subscribe(
      (data) => {
        // console.log("Data from ngOnInit: ", data);
        this.list = data;
        this.pokemonList = this.pokemonList.concat(data.results).slice(0, 150);
        let counter = 1;
        this.pokemonList = this.pokemonList.map((res) => {
          return {
            ...res,
            id: counter++,
          };
        });
        // console.log(this.pokemonList);
      },
      (error) => {
        console.log(error.message);
      });
  }

  ngOnDestroy() {
    if(this.pSub) {
      this.pSub.unsubscribe();
    }
  }

}
