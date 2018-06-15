import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public coursesList: CoursesListItem[] = [
    {
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
    }
  ] 

  constructor() { }

  ngOnInit() {
  }

}
