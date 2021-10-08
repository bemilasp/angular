import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Power1Component } from '../power1/power1.component';
import { Power2Component } from '../power2/power2.component';

const routes: Routes = [
  { path: 'power1', component: Power1Component },
  { path: 'power2', component: Power2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerRoutingModule { }
