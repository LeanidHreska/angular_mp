import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../models/courses-list-item.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public coursesList: CoursesListItem[] = [];

  constructor() { }

  ngOnInit() {
    this.coursesList = [{
      id: 1,
      title: 'Video course 1',
      creationDate: '01.01.2018',
      duration: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur congue ornare. Nunc efficitur congue ornare Donec hendrerit frin'
    }, {
      id: 2,
      title: 'Video course 2',
      creationDate: '01.01.2018',
      duration: 15,
      description: 'someDesc'
    }];
  }

  onDeleted(courseId: number) {
    console.log(courseId);
  }
}
