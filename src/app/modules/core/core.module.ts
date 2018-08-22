import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesService } from '../../services/courses/courses.service';
import { AuthService } from '../../services/auth/auth.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoaderService} from '../../services/loader/loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: []
})

export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CoursesService,
        AuthService,
        LoaderService,
      ]
    };
  }
}
