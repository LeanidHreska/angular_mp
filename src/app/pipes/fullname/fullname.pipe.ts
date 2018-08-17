import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user.model';

@Pipe({
  name: 'fullname'
})
export class FullNamePipe implements PipeTransform {

  transform(user: User): string {
    if (user) {
      return `${user.name.first} ${user.name.last}`;
    }
    return 'User Login';
  }

}
