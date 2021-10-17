import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';

import { StudentdetailsComponent } from '../studentdetails/studentdetails.component';


@NgModule({
  declarations: [
    
    StudentdetailsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
