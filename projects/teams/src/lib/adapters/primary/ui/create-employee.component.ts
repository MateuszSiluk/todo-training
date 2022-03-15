import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_EMPLOYEE_DTO, AddsEmployeeDtoPort } from '../../../application/ports/secondary/adds-employee.dto-port';

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
  });

  onFormSubmited(createEmployeeForm: FormGroup): void {
    
    this.onEmployeesFormsubmited();
}

  constructor(@Inject(ADDS_EMPLOYEE_DTO) private _addsEmployeeDto: AddsEmployeeDtoPort) {
  }

  onEmployeesFormsubmited(): void {
    this._addsEmployeeDto.add(this.createEmployeeForm.getRawValue());
  }
}
