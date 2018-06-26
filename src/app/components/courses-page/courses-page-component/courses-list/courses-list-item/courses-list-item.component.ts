import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesListItem } from '../../models/courses-list-item.model';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  
  @Input() public coursesListItem: CoursesListItem;
  @Output() deletedCourse = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(courseId: number) {
    this.deletedCourse.emit(courseId);
  }

}
