import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationDTO } from '../../../application/ports/secondary/navigation.dto';


@Component({
  selector: 'lib-main-menu',
  templateUrl: './main-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {

  navbar$ : Observable<NavigationDTO[]> = of([
  {
    text:"Home",
    link:"/"
  },
  {
    text:"O Nas",
    link:"/o-nas"
  },
  {
    text:"Pracownik",
    link:"/pracownik"
  },
  {
    text:"Kontakt",
    link:"/kontakt"
  },
  {
    text:"Test Komponentow",
    link:"/component-tests"
  },
]);
}
