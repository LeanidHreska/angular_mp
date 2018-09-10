import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../../models/course-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { GetCourseById, CreateCourse, EditCourse } from '../../../actions/courses.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NumberValidator } from '../../../validators/number.validator';
import { DateValidator } from '../../../validators/date.validator';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    public navigationRouter: Router,
    private store: Store<AppState>,
    private datePipe: DatePipe,
  ) {
  }

  public courseItem: CoursesListItem = {
    id: 3,
    name: '',
    date: new Date(),
    length: 0,
    description: '',
    authors: [],
  };

  public courseForm: FormGroup = new FormGroup({});

  routerParams: {
    id?: number,
  } = { };

  isEditing = false;

  getValues() {
    return this.courseForm.value;
  }

  setFormGroup(course) {
    console.log(course)
    this.courseForm = new FormGroup({
      'name': new FormControl(course.name, [
        Validators.maxLength(50),
        Validators.required,
      ]),
      'description': new FormControl(course.description, [
        Validators.maxLength(500),
        Validators.required,
      ]),
      'date': new FormControl(this.datePipe.transform(course.date, 'dd/MM/yyyy', 'ru-RU'), [
        Validators.required,
        DateValidator.validateDateField,
      ]),
      'length': new FormControl(course.length, [
        Validators.required,
        NumberValidator.validateNumberField,
      ]),
      'authors': new FormControl(course.authors, [
        Validators.required,
      ]),
    });
  }


  ngOnInit() {

    this.setFormGroup(this.courseItem);

    this.router.params.subscribe((data) => {
      if (!isEmpty(data)) {
        this.routerParams.id = data.id;
        this.store.dispatch(new GetCourseById({ id: parseInt(data.id, 10) }));

        this.store.select(state => state.courses.course).subscribe(course => course && this.setFormGroup(course));
        this.isEditing = true;
      }
    });
  }

  onSave() {
    const values = this.getValues();
    this.isEditing
      ? this.store.dispatch(new EditCourse({...values, id: this.routerParams.id}))
      : this.store.dispatch(new CreateCourse(values));

    this.navigationRouter.navigate(['courses']);
  }

}
