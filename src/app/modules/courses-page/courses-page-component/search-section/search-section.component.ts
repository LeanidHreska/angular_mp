import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  @Input() public onSearch: Function;

  public value = '';

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  onFind($event) {
    this.value = $event.target.value;
  }

  onClick() {
    this.onSearch(this.value);
  }

  handleAddCourse() {
    this.router.navigate(['courses', 'new']);
  }
}
