import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';

// such override allows to keep some initial values
 
export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 150 });
}

@Component({
  selector: 'lib-components-tests-page',
  templateUrl: './components-tests.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class ComponentsTestsPage implements OnInit{
  serverCreationStatus = 'No Server Created!';
  allowNewServer = false;

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }
}
