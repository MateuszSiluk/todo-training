import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponentModule } from 'projects/navigations/src/public-api';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { InMemoryContextStorageModule } from 'projects/teams/src/lib/adapters/secondary/infrastructure/in-memory-context.storage-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainMenuComponentModule,
    AngularFireModule.initializeApp(environment.firebase),
    InMemoryContextStorageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
