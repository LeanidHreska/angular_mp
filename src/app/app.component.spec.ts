import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/user/user.module';
import { CoursesPageModule } from './modules/courses-page/courses-page.module';
import { AddCoursePageModule } from './modules/add-course-page/add-course-page.module';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { CoreModule } from './modules/core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './config/routes';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        AddCoursePageModule,
        CoursesPageModule,
        UserModule,
        LoginPageModule,
        CoreModule.forRoot(),
        RouterModule.forRoot(ROUTES, { useHash: true }),
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
