import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "ng-connection-service";
import { OffOnLineAnimeHide, OffOnLineAnime } from "src/app/shared/animations";
import { ConnectionInternetService } from "src/app/shared/connection-internet.service";

@Component({
  selector: "app-modal-connection",
  templateUrl: "./modal-connection.component.html",
  styleUrls: ["./modal-connection.component.scss"],
  animations: [OffOnLineAnime, OffOnLineAnimeHide],
})
export class ModalConnectionComponent implements OnInit {
  isConnected: boolean;
  status: string = "";
  OffOnLineAnime: any;
  OffOnLineAnimeHide: any;
  constructor(private connectionInternetService: ConnectionInternetService) {}

  ngOnInit() {
    this.connectionInternetService.conect$.subscribe((isConnected) => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        isConnected = true;
        this.status = "ONLINE";
        setTimeout(() => {
          this.status = "";
        }, 2500);
      } else {
        isConnected = false;
        this.status = "OFFLINE";
        setTimeout(() => {
          this.status = "";
        }, 2500);
      }
    });
  }
}
