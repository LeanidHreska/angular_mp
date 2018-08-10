import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private source = new Subject<boolean>();
  constructor() { }

  init() {
    return this.source;
  }

  loading(isLoading: boolean) {
    this.source.next(isLoading);
  }
}
