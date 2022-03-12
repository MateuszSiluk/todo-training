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
 
}