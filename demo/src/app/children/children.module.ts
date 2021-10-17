import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';

import { Child2Component } from '../child2/child2.component';


@NgModule({
  declarations: [
    
    Child2Component
  ],
  imports: [
    CommonModule,
    ChildrenRoutingModule
  ]
})
export class ChildrenModule { }
