import { Injectable } from '@angular/core';
import {UsersModule} from '../pages/users/users.module';
import {HttpClient} from '@angular/common/http';
import {Person} from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[] = [
    new Person('1', 'Akos', 'ez az én fiókom', ['1', '2']),
    new Person('2', 'Virag', 'Egy nagyon szép kislány', ['3', '4', '7', '8']),
    new Person('3', 'Dani', 'a testvérem', ['5', '6']),
    new Person('4', 'Bálint', 'Sára balint fejei', []),
    new Person('5', 'Porgi', 'faszos', ['9'])
  ];

  constructor(private http: HttpClient) { }
}
