import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit{
 fruits: string[] = ["apple","mango","grape"];
  data: any = [];



  constructor(private http: HttpClient) { 
  }

 getData() {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  this.http.get(url).subscribe((res) => {
    this.data = res
    console.log(this.data)
  })
 }

  ngOnInit(): void {
   this.getData();
  }

}
