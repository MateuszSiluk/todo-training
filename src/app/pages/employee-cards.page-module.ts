import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeCardsPage } from './employee-cards.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeeCardsPage,
        }
      ])],
  	declarations: [EmployeeCardsPage],
  	providers: [],
  	exports: [] })
export class EmployeeCardsPageModule {
}
