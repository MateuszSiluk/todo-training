import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail.component';
import { RouterModule } from '@angular/router';
import { FirebaseEmployeesServiceModule } from '../../secondary/infrastructure/firebase-employees.service-module';

@NgModule({
  imports: [CommonModule, RouterModule, FirebaseEmployeesServiceModule],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent],
})
export class EmployeeDetailComponentModule {}
