import { Injectable } from '@angular/core';
import {UsersModule} from '../pages/users/users.module';
import {HttpClient} from '@angular/common/http';
import {PersonGroup} from '../model/person-group.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: UsersModule
})
export class PersonGroupService {

  personGroups: PersonGroup[] = [
    new PersonGroup('group1', 'Első csoport', ''),
    new PersonGroup('group2', 'Második csoport', 'Valami adat van itt')
  ];

  constructor(private http: HttpClient) { }

  createGroup() {
    // const groupName = 'test-group';
    // this.http.put(`${environment.SERVER_URL}/persongroups/${groupName}`,
    //   {
    //     name: 'Test Group',
    //     userData: 'This is a group to test new users.'
    //   })
    //   .subscribe(result => console.log('result: ', result), error => console.log('error: ', error));
  }

  fetchGroups() {
    return this.personGroups;
    // this.http.get(`${environment.SERVER_URL}/persongroups`)
    //   .subscribe(result => console.log('result: ', result), error => console.log('error: ', error));
  }

  trainGroup() {
    const personGroupId = 'test-group';
    this.http.post(`${environment.SERVER_URL}/persongroups/${personGroupId}/train`, {})
      .subscribe(result => console.log('result: ', result), error => console.log('error: ', error));
  }
}
