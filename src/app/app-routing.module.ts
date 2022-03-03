import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { ComponentsTestsPageModule } from './pages/components-tests.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'o-nas', 
        loadChildren: () => AboutUsPageModule
      },
  { 
        path: 'component-tests', 
        loadChildren: () => ComponentsTestsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
