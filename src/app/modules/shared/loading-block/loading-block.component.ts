import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../../../services/loader/loader.service';
import { SubscriptionLike, Observable } from 'rxjs';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit, OnDestroy {
  public loader$: Observable<boolean>;
  private subscription: SubscriptionLike;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loader$ =  this.loaderService.init();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
