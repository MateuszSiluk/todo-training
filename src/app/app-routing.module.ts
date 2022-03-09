import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { ComponentsTestsPageModule } from './pages/components-tests.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { EmployeeCardsPageModule } from './pages/employee-cards.page-module';
import { TestsPageModule } from './pages/tests.page-module';
import { ContactPageModule } from './pages/contact.page-module';

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
      },
  { 
        path: 'pracownik/:name', 
        loadChildren: () => EmployeeDetailsPageModule
      },
  { 
        path: 'pracownik', 
        loadChildren: () => EmployeeCardsPageModule
      },
  { 
        path: 'Test', 
        loadChildren: () => TestsPageModule
      },
  { 
        path: 'kontakt', 
        loadChildren: () => ContactPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
