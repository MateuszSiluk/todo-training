import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lib-employee-details-page',
  templateUrl: './employee-details.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsPage implements OnInit {
    
    name: string
    image: Observable<string>;
  constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.name = this.route.snapshot.paramMap.get('name')

        this.image = this.route.queryParamMap.pipe(
          map((params: ParamMap) => params.get('image')),
        );

        
  }
}
