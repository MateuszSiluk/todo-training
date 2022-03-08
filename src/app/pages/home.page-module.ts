import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';

@NgModule({ imports: [CommonModule, CarouselModule.forRoot(),
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]), OurTeamComponentModule],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
