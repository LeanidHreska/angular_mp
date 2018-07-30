import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from 'src/app/models/course-item.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  public courseItem: CoursesListItem = {
    id: 3,
    title: '',
    creationDate: 0,
    duration: 0,
    description: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
