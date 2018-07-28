import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CoursesListItem } from '../../models/courses-list-item.model';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../../../../shared/modal/modal.component';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  
  @Input() public coursesListItem: CoursesListItem;
  @Output() deletedCourse = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  setCourseBorder(creationDate: number) {
    const currentDate = Date.now();
    if ((creationDate < currentDate) && (creationDate >= currentDate - (14 * 86400))) {
      return { border: '2px solid #81e390'};
    }

    if (creationDate > currentDate) {
      return { border: '2px solid #7685cf'};
    }
  }

  onDelete(courseId: number) {
    this.deletedCourse.emit(courseId);
  }

  openDialogForDelete() {
    const dialogRef = this.dialog.open(ModalComponent,
      {
        width: '40%',
        data: {
          title: 'Do you really want to delete this course?',
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDelete(this.coursesListItem.id)
      }
    });
  }
}