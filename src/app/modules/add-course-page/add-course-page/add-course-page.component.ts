import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../../models/course-item.model';
import { CoursesService } from '../../../services/courses/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { GetCourseById, CreateCourse, EditCourse } from '../../../actions/courses.actions';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
    private router: ActivatedRoute,
    public navigationRouter: Router,
    private store: Store<AppState>
  ) {
  }

  public courseItem: CoursesListItem = {
    id: 3,
    name: '',
    date: new Date(),
    length: 0,
    description: '',
  };

  routerParams: {
    id?: number,
  } = { };

  isEditing = false;


  ngOnInit() {
    this.router.params.subscribe((data) => {
      if (!isEmpty(data)) {
        this.routerParams.id = data.id;
        this.store.dispatch(new GetCourseById({ id: parseInt(data.id, 10) }));

        this.store.select(state => state.courses.course).subscribe(course => this.courseItem = course);
        this.isEditing = true;
      }
    });
  }

  onSave() {
    this.isEditing
      ? this.store.dispatch(new EditCourse(this.courseItem))      
      : this.store.dispatch(new CreateCourse(this.courseItem));

    this.navigationRouter.navigate(['courses']);
  }

}
