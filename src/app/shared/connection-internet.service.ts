import { Injectable } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionInternetService {
connect$: any;
  constructor(private connectionService: ConnectionService) {
    this.connect$ = this.connectionService.monitor();
   }
}
