
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

 id: number;


 
  constructor(private route: ActivatedRoute) {
    
  }

 



  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  
  }

}
