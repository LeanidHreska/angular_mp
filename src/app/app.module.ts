import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { UserModule } from './components/user/user.module';
import { CoursesPageModule } from './components/courses-page/courses-page.module';
import { CoursesService } from './services/courses/courses.service';
import { LoginPageModule } from './components/login-page/login-page.module';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoursesPageModule,
    UserModule,
    LoginPageModule
  ],
  providers: [
    CoursesService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
