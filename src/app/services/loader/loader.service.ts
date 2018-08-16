import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private source = new Subject<boolean>();
  private loadingArray = [];

  constructor() { }

  init() {
    return this.source;
  }

  loading(isLoading: boolean) {
    isLoading ? this.loadingArray.push(true) : this.loadingArray.pop();
    this.source.next(!!this.loadingArray.length);
  }
}
