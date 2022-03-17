import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import {
  GETS_ONE_EMPLOYEE_DTO,
  GetsOneEmployeeDtoPort,
} from '../../../application/ports/secondary/gets-one-employee.dto-port';

@Component({
  selector: 'lib-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  employee$: Observable<EmployeeDTO> = this._getsOneEmployeeDto.getOne(
    this._activatedRoute.snapshot.params.employeeId
  );
  //params$ = this.activatedRoute.params;
  //queryParams$ = this.activatedRoute.queryParamMap;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    @Inject(GETS_ONE_EMPLOYEE_DTO)
    private _getsOneEmployeeDto: GetsOneEmployeeDtoPort,
    private _activatedRoute: ActivatedRoute
  ) {}

  back(): void {
    this.location.back();
  }
}
