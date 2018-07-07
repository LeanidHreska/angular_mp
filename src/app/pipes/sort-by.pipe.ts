import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(array: object[], fields: string[]): object[] {
    return sortBy(array, fields);
  }
}
