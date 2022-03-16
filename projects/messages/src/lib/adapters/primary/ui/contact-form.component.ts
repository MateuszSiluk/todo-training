import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Alert } from '../../../interfaces/Alert';
import { AlertType } from '../../../interfaces/AlertType';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Component({
  selector: 'lib-contact-form',
  templateUrl: './contact-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  

  readonly messageForm: FormGroup = new FormGroup({
    email: new FormControl(),
    text: new FormControl(),
    alertType: new FormControl(),
  });

  onFormSubmited(messageForm: FormGroup): void {
    if (messageForm.invalid) {
      return;
    }
    this._addsMessageDto.add({
      email: messageForm.get('email').value,
      text: messageForm.get('text').value,
    });
    this.messageForm.reset();
  }

  constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }

 
}
