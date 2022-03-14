import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { FirebaseNavigationServiceModule } from '../../secondary/infrastructure/firebase-navigation.service-module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FirebaseNavigationServiceModule,
    BsDropdownModule.forRoot(),
    RouterModule,
  ],
  declarations: [MainMenuComponent],
  providers: [],
  exports: [MainMenuComponent],
})
export class MainMenuComponentModule {}
