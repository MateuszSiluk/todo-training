import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AlertDTO } from '../../../application/ports/secondary/alert.dto';
import { IAlertType } from '../../../interfaces/IAlertType';

@Component({
  selector: 'lib-contact-form',
  templateUrl: './contact-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  alerts$: Observable<AlertDTO[]>;
  alertTypeChange$: Observable<IAlertType[]> = of([
    {
      name: 'Success',
      type: 'success',
    },
    {
      name: 'Info',
      type: 'info',
    },
    {
      name: 'Warning',
      type: 'warning',
    },
    {
      name: 'Danger',
      type: 'danger',
    },
  ]);

  readonly messageForm: FormGroup = new FormGroup({
    email: new FormControl(),
    text: new FormControl(),
    alertType: new FormControl(),
  });

  onFormSubmited(messageForm: FormGroup): void {
    this.alerts$ = of([
      {
        type: messageForm.value.alertType,
        message:
          'This is Email:' +
          messageForm.value.email +
          'and this is Text: \n' +
          messageForm.value.text,
      },
    ]);

    //Showing the Values in the console
    console.log(messageForm.getRawValue());
  }
}
