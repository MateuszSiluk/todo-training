import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
    employees$: Observable<EmployeeDTO[]> = of ([
        {
            id: '1',
            name:'Dani Chavez',
            bio: 'Lorem ipsum',
            imageUrl: '../../assets/images/fake-person-1.jpg',
        },
        {
            id: '2',
            name:'Katie Carter',
            bio: 'Lorem ipsum',
            imageUrl: '../../assets/images/fake-person-2.jpg',
        },
        {
            id: '3',
            name:'Kara Welsh',
            bio: 'Lorem ipsum',
            imageUrl: '../../assets/images/fake-person-3.jpg',
        },

    ]);
    
}


