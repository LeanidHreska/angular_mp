import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { GetAuthors } from '../../../../actions/authors.actions';
import { SubscriptionLike } from 'rxjs';

const noop = () => {};

@Component({
  selector: 'author-select',
  templateUrl: './author-select.component.html',
  styleUrls: ['./author-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorSelectComponent),
      multi: true,
    }
  ]
})
export class AuthorSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {

  constructor(private store: Store<AppState>) {}

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  private authorsSubscription$: SubscriptionLike;
  public selectedAuthors = [];
  public suggestedAuthors = [];
  public allAuthors = [];

  private textValue = '';

  @Input() formControl: FormControl;

  public writeValue(value: any) {
    this.selectedAuthors = value;
  }
  ngOnInit() {
    this.store.dispatch(new GetAuthors());
    this.authorsSubscription$ = this.store.select(state => state.authors.authors).
      subscribe(authors => this.allAuthors = authors);
  }

  onBlur() {
    this.onTouchedCallback();
  }

  onChange({ target: { value } }) {
    this.textValue = value;
    this.suggestedAuthors = !value
      ? []
      : this.getSuggestedAuthors(this.allAuthors, value);
  }

  onSuggestedClick(author) {
    this.selectedAuthors.push(author);
    this.suggestedAuthors = [];
    this.onChangeCallback(this.selectedAuthors);
  }

  onRemoveAuthor(id: string) {
    this.selectedAuthors = this.selectedAuthors.filter(author => author.id !== id);
    this.onChangeCallback(this.selectedAuthors);
  }

  getSuggestedAuthors(array, value: string) {
    const newArr = [];
    let i = 0;
    while ((i !== array.length - 1) && (newArr.length !== 5 )) {
      if (array[i].name.toLowerCase().includes(value.toLowerCase())) {
        newArr.push(array[i]);
      }
      i++;
    }
    return newArr;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  ngOnDestroy() {
    this.authorsSubscription$.unsubscribe();
  }
}
