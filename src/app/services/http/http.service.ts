import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoaderService } from '../loader/loader.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  private makeRequest(method: string, url: string, options?: object): Observable<any> {
    this.loaderService.loading(true);
    return Observable.create(observer => {
      this.http[method](url, options)
        .subscribe(data => {
          this.loaderService.loading(false);
          observer.next(data);
        });
    });
  }

  get(url: string, options?: object): Observable<any> {
    return this.makeRequest('get', url, options);
  }

  post(url: string, options?: object): Observable<any> {
    return this.makeRequest('post', url, options);
  }

  delete(url: string, options?: object): Observable<any> {
    return this.makeRequest('delete', url, options);
  }
}
