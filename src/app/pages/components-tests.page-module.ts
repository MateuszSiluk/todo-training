import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsTestsPage } from './components-tests.page';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({ imports: [CommonModule, 
    BsDropdownModule.forRoot(),
      RouterModule.forChild([
        {
          path: '',
          component: ComponentsTestsPage,
        }
      ])],
  	declarations: [ComponentsTestsPage],
  	providers: [],
  	exports: [] })
export class ComponentsTestsPageModule {
}
