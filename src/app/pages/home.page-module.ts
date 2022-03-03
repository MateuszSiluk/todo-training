import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({ imports: [CommonModule, CarouselModule.forRoot(),
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ])],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
