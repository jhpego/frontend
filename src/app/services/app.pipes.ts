import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Cent2Eur',
})
export class Cent2EurPipe implements PipeTransform {
  transform(n: number): string {
    return (n / 100).toFixed(2) + ' €';
  }
}
