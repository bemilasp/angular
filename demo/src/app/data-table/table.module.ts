import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../data-table/data-table.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: DataTableComponent}
]


@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
   
    RouterModule.forChild(routes)
     
  ]
})
export class TableModule { }
