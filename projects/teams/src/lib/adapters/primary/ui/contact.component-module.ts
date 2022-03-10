import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [ContactComponent],
  	providers: [],
  	exports: [ContactComponent] })
export class ContactComponentModule {
}
