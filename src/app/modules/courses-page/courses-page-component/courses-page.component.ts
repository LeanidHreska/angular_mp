import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../../models/course-item.model';
import { CoursesService } from '../../../services/courses/courses.service';
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  public coursesList: CoursesListItem[] = [];
  public paging = {
    start: 0,
    count: 5,
  };

  constructor(private coursesService: CoursesService) {
    this.getItemsByQuery = this.getItemsByQuery.bind(this);
    this.getItemsByFragment = this.getItemsByFragment.bind(this);
  }

  ngOnInit() {
    this.getItemsByQuery();
  }

  getItemsByQuery(isLoadNextPage?: boolean) {
    if (isLoadNextPage) {
      this.paging.start++;
    }
    this.getItems(`start=${this.paging.start}&count=${this.paging.count}`);
  }

  getItemsByFragment(text: string) {
    if (text) {
      this.getItems(`textFragment=${text}`);
    } else {
      this.getItemsByQuery();
    }
  }

  getItems(query: string) {
    this.coursesService.getList(query)
      .subscribe((data: CoursesListItem[]) => {
        this.coursesList = data;
      });
  }
}
