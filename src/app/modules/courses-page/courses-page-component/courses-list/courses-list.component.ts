import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from '../../../../models/course-item.model';
import { CoursesService } from '../../../../services/courses/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() public coursesList: CoursesListItem[];

  constructor(private coursesService: CoursesService, private router: Router) {
    this.onEditCourse = this.onEditCourse.bind(this);
  }

  ngOnInit() {
  }

  onDeleted(courseId: number) {
    this.coursesService.removeItem(courseId);
  }

  onEditCourse(courseId: number) {
    this.router.navigate(['courses', courseId, 'edit']);
  }
}
