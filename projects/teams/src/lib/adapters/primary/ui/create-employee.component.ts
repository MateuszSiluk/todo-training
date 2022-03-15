import {
  FormGroup,
  FormControl,
  FormArray,
  FormGroupDirective,
} from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_EMPLOYEE_DTO,
  AddsEmployeeDtoPort,
} from '../../../application/ports/secondary/adds-employee.dto-port';
import { AlertComponent } from 'ngx-bootstrap/alert';

@Component({
  selector: 'lib-create-employee',
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent {
  readonly createEmployeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    bio: new FormControl(),
    imageUrl: new FormControl(),
    department: new FormGroup({
      employeeCount: new FormControl(),
      departmentName: new FormControl(),
    }),
  });

 

  onFormSubmited(createEmployeeForm: FormGroup): void {
    this.onEmployeesFormSubmited();
    this.addAlert(this.createEmployeeForm.value.name);
  }

  constructor(
    @Inject(ADDS_EMPLOYEE_DTO) private _addsEmployeeDto: AddsEmployeeDtoPort
  ) {}

  onEmployeesFormSubmited(): void {
    this._addsEmployeeDto.add(this.createEmployeeForm.getRawValue());
  }

  
  alerts: any[] = [];
 
  addAlert(name:string): void {
    this.alerts.push({
      type: 'success',
      msg: `Success you added ${name} to database!`,
      timeout: 5000
    });
  }
 
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
}
