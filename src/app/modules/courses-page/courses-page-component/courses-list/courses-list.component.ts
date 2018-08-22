import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from '../../../../models/course-item.model';
import { CoursesService } from '../../../../services/courses/courses.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { RemoveCourse } from '../../../../actions/courses.actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() public coursesList: CoursesListItem[];
  @Input() public getItems: Function;

  constructor(private coursesService: CoursesService,
              private router: Router,
              private store: Store<AppState>
            ) {
    this.onEditCourse = this.onEditCourse.bind(this);
  }

  ngOnInit() {
  }

  onDeleted(courseId: number) {
    this.store.dispatch(new RemoveCourse({ id: courseId, callback: this.getItems }))
  }

  onEditCourse(courseId: number) {
    this.router.navigate(['courses', courseId, 'edit']);
  }
}
