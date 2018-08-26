import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

const noop = () => {};

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    }
  ]
})
export class NumberInputComponent implements ControlValueAccessor {

  private currValue: string = '';
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  public color = "primary";
  @Input() placeholder: string;
  @Input() formControl: FormControl;
  constructor() { }

  public writeValue(value: any) {
    this.currValue = value;
  }

  onBlur() {
    this.onTouchedCallback();
  }

  change({ target: { value } }) {
    this.currValue = value;
    this.onChangeCallback(value);
    this.color = this.formControl.errors
    ? 'warn' : 'primary'
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
