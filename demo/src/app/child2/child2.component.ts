import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularService } from '../angular.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  receivedHobby: string="";

  receivedName: string="";


  constructor(private obj: AngularService) {}

  ngOnInit(): void {

    this.receivedHobby = this.obj.getParentName();
    this.receivedName = this.obj.getParentHobby();
   
  }

}
