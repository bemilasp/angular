import { NgModule, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routingmodule';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { StructureDirective } from './structure.directive';
import { ColorDirective } from './color.directive';

import { PowerRoutingModule } from './power/power-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './data-table/table.module';
import { CustomPipe } from '../app/data-table/custom.pipe';
import { PowerModule } from './power/power.module';




@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    StructureDirective,
    ColorDirective,
    CustomPipe
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PowerRoutingModule,
    HttpClientModule,
    TableModule,
    PowerModule,
    
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
