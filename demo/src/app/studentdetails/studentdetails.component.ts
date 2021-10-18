
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  data: any = {};


  constructor(private route: ActivatedRoute, private http: HttpClient  ) { 
  }

  ngOnInit(): void {

 const id = this.route.snapshot.paramMap.get('id');
   
 const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

 this.http.get(url).subscribe((res) => {
   this.data = res
   console.log(this.data)
 }) 
    
  }

}
