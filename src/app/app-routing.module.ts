import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { ComponentsTestsPageModule } from './pages/components-tests.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { EmployeeCardsPageModule } from './pages/employee-cards.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { AdminPageModule } from './pages/admin.page-module';

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
        path: 'pracownik', 
        loadChildren: () => EmployeeDetailsPageModule
      },
  { 
        path: 'pracownik', 
        loadChildren: () => EmployeeCardsPageModule
      },
  
  { 
        path: 'kontakt', 
        loadChildren: () => ContactPageModule
      },
  { 
        path: 'admin', 
        loadChildren: () => AdminPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
