import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lib-employee-cards-page',
  templateUrl: './employee-cards.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardsPage {
    images = {

        image1: {
        src: '../../assets/images/fake-person-1.jpg',
        name: 'Dani Chavez'
        },

        image2: {
        src: '../../assets/images/fake-person-2.jpg',
        name: 'Katie Carter'
        },

        image3: {
        src: '../../assets/images/fake-person-3.jpg',
        name: 'Kara Welsh'
        }
    };
}
