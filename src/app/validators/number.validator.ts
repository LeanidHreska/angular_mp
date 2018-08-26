import { FormControl } from '@angular/forms';

export class NumberValidator {
  static validateNumberField(fc: FormControl){
    if (/^([0-9]*)$/.test(fc.value)) {
      return null;
    } else {
      return {
        validateNumberField: true,
      };
    }
  }
}