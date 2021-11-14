import { Component, OnInit, Input } from "@angular/core";
import { PokemonList } from "src/app/shared/interface";
import { ConnectionInternetService } from "src/app/shared/connection-internet.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: PokemonList[];
  @Input() items: any[] = [];
  @Input() searchText = "";
  pageOfItems: Array<any> = [];
  isConnected: boolean = true;

  constructor(private connectionInternetService: ConnectionInternetService) {}

  ngOnInit() {
    this.connectionInternetService.connect$.subscribe((isConnected) => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        isConnected = true;
      } else {
        isConnected = false;
      }
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  trackById(index: number, el: any) {
    return el.id;
  }

  pageToTop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 250);
  }
}
