import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from '../models/courses-list-item.model';
import { CoursesService } from '../../../../services/courses/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  
  @Input() public coursesList: CoursesListItem[];
  
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  onDeleted(courseId: number) {
    this.coursesService.removeItem(courseId);
    console.log(this.coursesService.getList())
  }
}
