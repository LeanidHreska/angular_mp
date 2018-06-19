import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { SearchSectionComponent } from './search-section/search-section.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [SearchSectionComponent],
  exports: [SearchSectionComponent]
})
export class SearchSectionModule { }
