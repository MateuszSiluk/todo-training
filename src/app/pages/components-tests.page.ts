import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';


@Component({
  selector: 'lib-components-tests-page',
  templateUrl: './components-tests.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  
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
