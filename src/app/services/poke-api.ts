import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeAPI {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}&offset=${offset}`).pipe(
      switchMap((response: any) => {
        const detailRequests: Observable<any>[] = response.results.map((pokemon: any) =>
          this.http.get(pokemon.url)
        );
        return forkJoin(detailRequests);
      }),
      map((pokemonDetails: any[]) => {
        return pokemonDetails.map((pokemon) => {
          const types = pokemon.types.map((t: any) => t.type.name);
          return {
            id: pokemon.id,
            name: pokemon.name,
            picture: pokemon.sprites.other['official-artwork'].front_default,
            tipo1: types[0],
            tipo2: types[1] || null,
          };
        });
      })
    );
  }
}
