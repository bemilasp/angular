import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {



  data: any = [];

  constructor(private http: HttpClient) { 
  }


 
  ngOnInit(): void {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data)
    })
   
  }

 




}
