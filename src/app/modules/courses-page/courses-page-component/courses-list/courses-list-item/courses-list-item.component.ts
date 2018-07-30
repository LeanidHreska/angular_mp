import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CoursesListItem } from '../../../../../models/course-item.model';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../../../../shared/modal/modal.component';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListItemComponent implements OnInit {
  
  @Input() public item: CoursesListItem;
  @Input() public onConfirmDeleteTitle: string;
  @Input() public onEditCourse: Function;
  @Output() deletedCourse = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  setCourseBorder(creationDate: Date) {
    const currentDate: Date = new Date();
    if ((creationDate < currentDate) &&
      (creationDate.getTime() >= currentDate.getTime() - (14 * 86400))) {
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
          title: this.onConfirmDeleteTitle,
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDelete(this.item.id)
      }
    });
  }
}
