import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../../../services/loader/loader.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit, OnDestroy {
  private isShow = false;
  private subscription: SubscriptionLike;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.init()
      .subscribe(isShow => this.isShow = isShow);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
