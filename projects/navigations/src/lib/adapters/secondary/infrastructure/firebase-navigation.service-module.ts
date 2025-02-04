import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseNavigationService } from './firebase-navigation.service';
import { GETS_ALL_NAVIGATION_DTO } from '../../../application/ports/secondary/gets-all-navigation.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseNavigationService, { provide: GETS_ALL_NAVIGATION_DTO, useExisting: FirebaseNavigationService }],
  	exports: [] })
export class FirebaseNavigationServiceModule {
}
