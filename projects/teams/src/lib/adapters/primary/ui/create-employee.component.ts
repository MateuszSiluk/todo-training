import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    

    //Showing the Values in the console
    console.log(createEmployeeForm.getRawValue());
}
}
