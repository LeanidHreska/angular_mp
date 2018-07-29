import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesListItem } from 'src/app/models/course-item.model';
import { FilterByPipe, Options } from '../../../../pipes/filter-by.pipe';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  
  @Input() public coursesList: CoursesListItem[];
  @Output() filteredCourses = new EventEmitter<Object[]>();

  public value: string = '';

  constructor() { }

  ngOnInit() {
  }

  onFind($event) {
    this.value = $event.target.value;
  }

  onClick() {
    const options: Options = {
      field: 'title',
      value: this.value,
    };

    const filteredCourses = new FilterByPipe().transform(this.coursesList, options);
    this.filteredCourses.emit(filteredCourses);
  }
}
