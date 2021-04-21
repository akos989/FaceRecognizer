import {Component} from '@angular/core';
import {Person} from '../../model/person.model';
import {PersonService} from '../../service/person.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  users: Person[] = [];
  currentUser: Person;

  constructor(private personService: PersonService) {
    this.users = personService.persons;
    this.currentUser = this.users[1];
  }
}
