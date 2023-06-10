import { Component, Input } from '@angular/core';
import { Person } from 'src/app/helpers/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person!: Person;
}
