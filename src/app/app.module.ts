import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { CoursesPageModule } from './modules/courses-page/courses-page.module';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { CoreModule } from './modules/core/core.module';
import { AddCoursePageModule } from './modules/add-course-page/add-course-page.module';
import { RouterModule } from '@angular/router';

import { ROUTES } from './config/routes';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AddCoursePageModule,
    CoursesPageModule,
    UserModule,
    LoginPageModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
