import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ModalComponent } from './modal/modal.component';
import { DurationPipe } from '../../pipes/duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoadMoreComponent,
    ModalComponent,
    DurationPipe,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadMoreComponent,
    DurationPipe
  ],
  entryComponents: [ModalComponent],
})
export class SharedModule { }
