import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, AlertModule.forRoot(),
  ],
  declarations: [CreateEmployeeComponent],
  providers: [],
  exports: [CreateEmployeeComponent],
})
export class CreateEmployeeComponentModule {}
