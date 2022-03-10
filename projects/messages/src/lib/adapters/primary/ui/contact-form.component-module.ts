import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, AlertModule.forRoot()],
  	declarations: [ContactFormComponent],
  	providers: [],
  	exports: [ContactFormComponent] })
export class ContactFormComponentModule {
}
