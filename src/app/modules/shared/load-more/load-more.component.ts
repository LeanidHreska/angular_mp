import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit {
  @Input() public loadItems: Function;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.loadItems(true);
  }
}
