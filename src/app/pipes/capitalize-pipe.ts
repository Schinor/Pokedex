import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    const primeiraLetra = value.charAt(0).toUpperCase();
    const restoDaString = value.slice(1).toLowerCase();
    return primeiraLetra + restoDaString;
  }
}
