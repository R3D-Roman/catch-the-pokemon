import { Injectable } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionInternetService {
conect$: any;
  constructor(private connectionService: ConnectionService) {
    this.conect$ = this.connectionService.monitor();
   }
}
