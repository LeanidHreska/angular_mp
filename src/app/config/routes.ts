import { Routes } from '@angular/router';
import { CoursesPageComponent } from '../modules/courses-page/courses-page-component/courses-page.component';
import { AddCoursePageComponent } from '../modules/add-course-page/add-course-page/add-course-page.component';
import { NotFoundComponent } from '../modules/shared/not-found/not-found.component';
import { LoginPageComponent } from '../modules/login-page/login-page/login-page.component';
import { AuthGuard } from '../guards/auth.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full'},

  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id/edit',
    component: AddCoursePageComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'courses/new',
    component: AddCoursePageComponent,
    canActivate: [AuthGuard]
  },

  { path: 'login', component: LoginPageComponent },


  { path: '**', component: NotFoundComponent }
];
