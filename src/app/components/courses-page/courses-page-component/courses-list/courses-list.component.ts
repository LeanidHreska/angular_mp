import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from '../models/courses-list-item.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  
  @Input() public coursesList: CoursesListItem[];
  
  constructor() { }

  ngOnInit() {
  }

  onDeleted(courseId: number) {
    console.log(courseId);
  }
}
