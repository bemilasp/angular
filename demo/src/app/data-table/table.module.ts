import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../data-table/data-table.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'data-table', component: DataTableComponent}
]


@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
     
  ]
})
export class TableModule { }
