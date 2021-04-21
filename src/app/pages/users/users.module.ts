import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {LoginComponent} from '../../components/login/login.component';
import {UsersListComponent} from '../../components/users-list/users-list.component';
import {RegistrationComponent} from '../../components/registration/registration.component';


@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    UsersListComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
