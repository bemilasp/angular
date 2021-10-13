import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerRoutingModule } from './power-routing.module';
import { Power1Component } from '../power1/power1.component';
import { Power2Component } from '../power2/power2.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Power1Component,
    Power2Component,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    PowerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PowerModule { }
