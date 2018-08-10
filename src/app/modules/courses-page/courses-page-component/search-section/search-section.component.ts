import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, SubscriptionLike, timer } from 'rxjs';
import { filter, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  @Input() public onSearch: Function;

  public value = '';
  private source = new Subject<string>();
  private subscription: SubscriptionLike;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.subscription = this.source
      .pipe(debounce(() => timer(200)))
      .pipe(filter(num => num.length >= 3))
      .subscribe(val => this.onSearch(val));
  }

  onChange(value) {
    this.source.next(value);
  }

  handleAddCourse() {
    this.router.navigate(['courses', 'new']);
  }

  OnDestroy() {
    this.subscription.unsubscribe();
  }
}
