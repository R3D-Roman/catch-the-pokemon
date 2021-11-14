import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import {
  catchError,
  take,
  expand,
  delay,
  tap,
} from "rxjs/operators";
import { Pokemon, PokemonDetails, MovesInfo, AbilityEffects, PokemonAbilities } from "./interface";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  public list = [];
  join = [];
  count: number = 1;

  fetchPages(): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .pipe(
        expand(({ next }) => (next ? this.http.get<Pokemon>(next) : of())),
        take(9),
        catchError((err) => {
          console.log("error in source. Details: " + err);
          return throwError(err);
        })
      );
  }

  fetchUrlInfo(id: number): Observable<PokemonAbilities> {
    return this.http.get<PokemonAbilities>(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .pipe(
      delay(1000),
      catchError((err) => {
        console.log("error in Info. Details: " + err);
        return throwError(err);
      })
    );
  }

  fetchMoves(url?: string): Observable<MovesInfo> {
    return this.http.get<MovesInfo>(url)
    .pipe(
      catchError((err) => {
        console.log("error in Moves. Details: " + err);
        return throwError(err);
      })
    );
  }

  fetchAbilities(url?: string): Observable<AbilityEffects> {
    return this.http.get<AbilityEffects>(url)
    .pipe(
      catchError((err) => {
        console.log("error in Abilities. Details: " + err);
        return throwError(err);
      })
    );
  }
}
