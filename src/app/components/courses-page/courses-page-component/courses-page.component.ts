import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from './models/courses-list-item.model';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public coursesList: CoursesListItem[] = [];

  constructor() { }

  ngOnInit() {
    this.coursesList = [{
      id: 2,
      title: 'Video course 2',
      creationDate: 1535058512080,
      duration: 65,
      description: 'someDesc',
      topRated: false,
    }, {
      id: 1,
      title: 'Video course 1',
      creationDate: 1530958348080,
      duration: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur congue ornare. Nunc efficitur congue ornare Donec hendrerit frin',
      topRated: true,
    }];
  }

  onFilter(coursesList: CoursesListItem[]) {
    this.coursesList = coursesList;
  }

}
