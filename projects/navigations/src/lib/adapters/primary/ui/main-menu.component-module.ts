import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';


@NgModule({ imports: [CommonModule, BrowserAnimationsModule,
    BsDropdownModule.forRoot(), RouterModule],
  	declarations: [MainMenuComponent],
  	providers: [],
  	exports: [MainMenuComponent] })
export class MainMenuComponentModule {
}
