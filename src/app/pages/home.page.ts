import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'lib-home-page',
  templateUrl: './home.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
