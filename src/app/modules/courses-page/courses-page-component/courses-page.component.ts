import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from 'src/app/models/course-item.model';
import { CoursesService } from '../../../services/courses/courses.service';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public coursesList: CoursesListItem[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesList = this.coursesService.getList();
  }

  onFilter(coursesList: CoursesListItem[]) {
    this.coursesList = coursesList;
  }

}
