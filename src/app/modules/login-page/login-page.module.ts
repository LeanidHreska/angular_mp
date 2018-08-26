import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent,
  ]
})
export class LoginPageModule { }
