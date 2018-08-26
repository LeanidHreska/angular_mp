import { FormControl } from '@angular/forms';

export class DateValidator {

  static validateDateField(fc: FormControl){
    if (/^([0-9]{2}\/[0-9]{2}\/[0-9]{4})$/.test(fc.value)) {
      return null;
    } else {
      return {
        validateDate: true,
      };
    }
  }
}