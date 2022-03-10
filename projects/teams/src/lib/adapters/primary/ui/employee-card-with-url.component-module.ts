import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardWithUrlComponent } from './employee-card-with-url.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [EmployeeCardWithUrlComponent],
  	providers: [],
  	exports: [EmployeeCardWithUrlComponent] })
export class EmployeeCardWithUrlComponentModule {
}
