import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing-module';
import { About } from './about/about';
import { Home } from './home/home';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    Home,
    About
  ]
})
export class UsersModule { }
