import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardWithUrlComponent } from './employee-card-with-url.component';
import { RouterModule } from '@angular/router';
import { FirebaseEmployeesServiceModule } from '../../secondary/infrastructure/firebase-employees.service-module';

@NgModule({
  imports: [CommonModule, RouterModule,FirebaseEmployeesServiceModule],
  declarations: [EmployeeCardWithUrlComponent],
  providers: [],
  exports: [EmployeeCardWithUrlComponent],
})
export class EmployeeCardWithUrlComponentModule {}
