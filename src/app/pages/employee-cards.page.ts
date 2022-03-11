import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { EmployeeDTO } from 'projects/teams/src/lib/application/ports/secondary/employee.dto';
import { Observable, of } from 'rxjs';
import { Employee } from './employee.model';


@Component({
  selector: 'lib-employee-cards-page',
  templateUrl: './employee-cards.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardsPage {
  employees1: Employee[] = [
    new Employee('Test', 'Test', 'Test'),
    new Employee('Test', 'Test', 'Test'),
  ];
  employees$ : Observable<EmployeeDTO[]> = of ([
    {
        id: '1',
        name:'Dani Chavez',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageUrl: 'https://mati169.000webhostapp.com/images/fake-person-1.jpg',
    },
    {
        id: '2',
        name:'Katie Carter',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageUrl: 'https://mati169.000webhostapp.com/images/fake-person-2.jpg',
    },
    {
        id: '3',
        name:'Kara Welsh',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageUrl: 'https://mati169.000webhostapp.com/images/fake-person-3.jpg',
    },
]);
}