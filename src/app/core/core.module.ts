import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
