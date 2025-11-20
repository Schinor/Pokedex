import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';

@Component({
  selector: 'app-card-pokemon',
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './card-pokemon.html',
  styleUrl: './card-pokemon.css',
})
export class CardPokemon {
  @Input() idPokemon: String = '1';
  @Input() nomePokemon: string = 'Bulbasaur';
  @Input() tipo1Pokemon: string | null = 'Grass';
  @Input() tipo2Pokemon: string | null = 'Poison';
  @Input() fotoPokemon: String = '/bulbasaur.jpg';
}
