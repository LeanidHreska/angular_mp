import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullNamePipe implements PipeTransform {

  transform(firstName: string, lastName): string {
    if (firstName) {
      return `${firstName} ${lastName}`;
    }
    return 'User Login';
  }

}
