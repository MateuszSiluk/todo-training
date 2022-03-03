import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsTestsPage } from './components-tests.page';

@NgModule({ imports: [CommonModule, 
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
