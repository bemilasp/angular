import { NgModule, TemplateRef } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routingmodule';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { StructureDirective } from './structure.directive';
import { ColorDirective } from './color.directive';
import { Power1Component } from './power1/power1.component';
import { Power2Component } from './power2/power2.component';
import { PowerRoutingModule } from './power/power-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    StructureDirective,
    ColorDirective,
    Power1Component,
    Power2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PowerRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
