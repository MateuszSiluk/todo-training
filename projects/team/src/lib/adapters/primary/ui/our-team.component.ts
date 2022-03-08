import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
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
