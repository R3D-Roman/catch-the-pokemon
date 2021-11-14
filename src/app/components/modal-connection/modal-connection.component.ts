import { Component, OnInit } from "@angular/core";
import { delay, tap } from "rxjs/operators";
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
  constructor(private connectionInternetService: ConnectionInternetService) {}

  ngOnInit() {
    this.connectionInternetService.connect$
      .pipe(
        tap((x: boolean) => {
          this.isConnected = x;
          if (this.isConnected) {
            x = true;
            this.status = "ONLINE";
          } else {
            x = false;
            this.status = "OFFLINE";
          }
        }),
        delay(2500),
        tap((x) => {
          this.status = "";
        })
      )
      .subscribe();
  }
}
