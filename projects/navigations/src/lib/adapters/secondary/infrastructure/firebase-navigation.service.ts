import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllNavigationDtoPort } from '../../../application/ports/secondary/gets-all-navigation.dto-port';
import { NavigationDTO } from '../../../application/ports/secondary/navigation.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseNavigationService implements GetsAllNavigationDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<NavigationDTO>): Observable<NavigationDTO[]> {
    return this._client.collection<NavigationDTO>('navigation').valueChanges(({idField: 'id'})).pipe(map((data: NavigationDTO[]) => filterByCriterion(data, criterion)));
  }
}
