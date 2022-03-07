import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestsPage } from './tests.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TestsPage,
        }
      ])],
  	declarations: [TestsPage],
  	providers: [],
  	exports: [] })
export class TestsPageModule {
}
