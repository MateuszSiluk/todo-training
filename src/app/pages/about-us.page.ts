import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';

@Component({ selector: 'lib-about-us-page', templateUrl: './about-us.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AboutUsPage {
    employees$ = of ([

        {
        src: '../../assets/images/fake-person-1.jpg',
        alt: 'Dani Chavez'
        },

        {
        src: '../../assets/images/fake-person-2.jpg',
        alt: 'Katie Carter'
        },

        {
        src: '../../assets/images/fake-person-3.jpg',
        alt: 'Kara Welsh'
        }
     ] );
    
}
