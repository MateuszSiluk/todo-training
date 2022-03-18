import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeDetailComponentModule } from '../../../projects/teams/src/lib/adapters/primary/ui/employee-detail.component-module';


@NgModule({ imports: [CommonModule,
      RouterModule.forChild([
        {
          path: ':employeeId',
          component: EmployeeDetailsPage,
        }
      ]),
  EmployeeDetailComponentModule,
],
  	declarations: [EmployeeDetailsPage],
  	providers: [],
  	exports: [] })
export class EmployeeDetailsPageModule {

 

}
