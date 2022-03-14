import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateEmployeeComponentModule } from '../../../projects/teams/src/lib/adapters/primary/ui/create-employee.component-module';
import { FirebaseEmployeesServiceModule } from '../../../projects/teams/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';
import { FirebaseNavigationServiceModule } from '../../../projects/navigations/src/lib/adapters/secondary/infrastructure/firebase-navigation.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      },
    ]),
    CreateEmployeeComponentModule,
    FirebaseEmployeesServiceModule,
    FirebaseNavigationServiceModule
  ],
  declarations: [AdminPage],
  providers: [],
  exports: [],
})
export class AdminPageModule {}
