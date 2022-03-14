import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OurTeamComponentModule } from '../../../projects/teams/src/lib/adapters/primary/ui/our-team.component-module';
import { FirebaseEmployeesServiceModule } from 'projects/teams/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';

@NgModule({ imports: [CommonModule, CarouselModule.forRoot(),
    
  FirebaseEmployeesServiceModule,
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
