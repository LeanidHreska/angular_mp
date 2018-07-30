import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../../../models/course-item.model';
import { CoursesService } from '../../../services/courses/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private router: ActivatedRoute,
    public navigationRouter: Router,
  ) { 
    
  }
  
  public courseItem: CoursesListItem = {
    id: 3,
    title: '',
    creationDate: new Date(),
    duration: 0,
    description: '',
  };

  routerParams: {
    id?: number,
  } = { };

  isEditing: boolean = false;


  ngOnInit() {
    this.router.params.subscribe((data) => {
      if (!isEmpty(data)) {
        this.routerParams.id = data.id;
        this.courseItem = this.coursesService.getItemById(parseInt(data.id));
        this.isEditing = true;
      } 
    });

    if (!this.isEditing) {
      this.courseItem.id = this.coursesService.getIdForNewCourse();
    }
  }

  onSave() {
    console.log(this.courseItem)
    this.isEditing
      ? this.coursesService.updateItem(this.courseItem)
      : this.coursesService.createCourse(this.courseItem);

    this.navigationRouter.navigate(['courses']);
  }

}
