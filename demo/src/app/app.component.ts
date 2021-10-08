import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularService } from './angular.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  parent: string="";
  receiveChild: string="";
  hobby: string="";

  condition = false;

  heroes = {
    "name": "vijay",
    "age": 30

  }



  fruits: string[] = ["apple","mango","grape"];

  fruit: string="";
  constructor(private router: Router, private  obj: AngularService ) {

  }
 
  

  onChangeChild(event: string): void {
    this.receiveChild = event;
  }

  showChild1Component(): void {
    this.router.navigateByUrl('child1');
  }

  showChild2Component(): void {
   
    this.obj.setParentName(this.parent);
    this.obj.setParentHobby(this.hobby);
    this.router.navigateByUrl('child2');
  }




  
}
