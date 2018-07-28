import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItem } from '../modules/courses-page/courses-page-component/models/courses-list-item.model';

export interface Options {
  field: string,
  value: string,
}

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(array: CoursesListItem[], options: Options): CoursesListItem[] {
    console.log(options)
    return array.filter(item => item[options.field].includes(options.value))
  }

}
