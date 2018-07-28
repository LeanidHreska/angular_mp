import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ModalComponent } from './modal/modal.component';

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
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadMoreComponent
  ],
  entryComponents: [ModalComponent],
})
export class SharedModule { }
