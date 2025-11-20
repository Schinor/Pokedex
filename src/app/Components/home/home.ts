import { Component, OnInit } from '@angular/core';
import { CardPokemon } from '../card-pokemon/card-pokemon';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { PokeAPI } from '../../services/poke-api';

@Component({
  selector: 'app-home',
  imports: [CardPokemon, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly pokeAPI = inject(PokeAPI);
  listaPokemons: any[] = [];
  limit: number = 100;
  offset: number = 0;

  ngOnInit(): void {
    this.carregarPokemons();
  }

  carregarPokemons(): void {
    this.pokeAPI.getPokemon(this.limit, this.offset).subscribe((data) => {
      this.listaPokemons = data;
    });
  }

  proximaPagina(): void {
    this.offset += this.limit;
    this.carregarPokemons();
  }

  paginaAnterior(): void {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.carregarPokemons();
    }
  }
}
