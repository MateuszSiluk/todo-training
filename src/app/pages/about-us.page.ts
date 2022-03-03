import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ selector: 'lib-about-us-page', templateUrl: './about-us.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AboutUsPage {
    images = {

        image1: {
        src: '../../assets/images/fake-person-1.jpg',
        alt: 'Dani Chavez'
        },

        image2: {
        src: '../../assets/images/fake-person-2.jpg',
        alt: 'Katie Carter'
        },

        image3: {
        src: '../../assets/images/fake-person-3.jpg',
        alt: 'Kara Welsh'
        }
    };
}
