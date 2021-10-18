import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  data: any = [];

  constructor(private http: HttpClient) { 
  }


 
  ngOnInit(): void {
    const url = `https://jsonplaceholder.typicode.com/todos`
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data)
    })
   
  }

 




}
