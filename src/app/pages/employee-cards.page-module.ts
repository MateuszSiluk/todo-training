import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeCardsPage } from './employee-cards.page';
import { EmployeeCardWithUrlComponentModule } from '../../../projects/teams/src/lib/adapters/primary/ui/employee-card-with-url.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeeCardsPage,
        }
      ]),
  EmployeeCardWithUrlComponentModule
],
  	declarations: [EmployeeCardsPage],
  	providers: [],
  	exports: [] })
export class EmployeeCardsPageModule {
}
