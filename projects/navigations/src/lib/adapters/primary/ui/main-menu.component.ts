import { Observable, of } from 'rxjs';
import { NavigationDTO } from '../../../application/ports/secondary/navigation.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_NAVIGATION_DTO, GetsAllNavigationDtoPort } from '../../../application/ports/secondary/gets-all-navigation.dto-port';

@Component({
  selector: 'lib-main-menu',
  templateUrl: './main-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {
  navbar$: Observable<NavigationDTO[]> = this._getsAllNavigationDto.getAll();

  constructor(@Inject(GETS_ALL_NAVIGATION_DTO) private _getsAllNavigationDto: GetsAllNavigationDtoPort) {
  }

}
