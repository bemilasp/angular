import { NgModule, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routingmodule';

import { StructureDirective } from './structure.directive';
import { ColorDirective } from './color.directive';

import { PowerRoutingModule } from './power/power-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './data-table/table.module';
import { CustomPipe } from '../app/data-table/custom.pipe';
import { PowerModule } from './power/power.module';
import { StudentsModule } from './students/students.module';
import { StudentComponent } from './student/student.component';





@NgModule({
  declarations: [
    AppComponent,
    
    StructureDirective,
    ColorDirective,
  StudentComponent,
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
    StudentsModule
    
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
