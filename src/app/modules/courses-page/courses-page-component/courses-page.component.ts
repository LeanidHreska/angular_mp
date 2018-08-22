import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesListItem } from '../../../models/course-item.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { GetCoursesList } from '../../../actions/courses.actions';
import { SubscriptionLike } from 'rxjs';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit, OnDestroy {

  private coursesSubscription$: SubscriptionLike;
  public coursesList: CoursesListItem[] = [];
  public paging = {
    start: 0,
    count: 5,
  };

  constructor(private store: Store<AppState>) {
    this.getItemsByQuery = this.getItemsByQuery.bind(this);
    this.getItemsByFragment = this.getItemsByFragment.bind(this);
  }

  ngOnInit() {
    this.getItemsByQuery();
    this.coursesSubscription$ = this.store.select(state => state.courses.coursesList)
      .subscribe(list => this.coursesList = list);
  }

  getItemsByQuery(isLoadNextPage?: boolean) {
    if (isLoadNextPage) {
      this.paging.start++;
    }
    this.getItems(`start=${this.paging.start}&count=${this.paging.count}`);
  }

  getItemsByFragment(text: string) {
    if (text) {
      this.getItems(`textFragment=${text}`);
    } else {
      this.getItemsByQuery();
    }
  }

  getItems(query: string) {
    this.store.dispatch(new GetCoursesList({ query }));
  }

  ngOnDestroy() {
    this.coursesSubscription$.unsubscribe();
  }
}
