import { Component, NgIterable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularService } from './angular.service';
import { NgForm, NgModel } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  city = [
    {cityName: "kovai"},
    {cityName: "chennai"},
    {cityName: "salem"},
    {cityName: "puthur"},

  ];

  submitForm(formData: NgForm) {
    console.log(formData)
  }



select: string = "--- Select your city ---";

  title = 'demo';
  parent: string="";
  receiveChild: string="";
  hobby: string="";

  condition = false;

  heroes = {
    "name": "vijay",
    "age": 30

  }

  birthday = new Date(1988, 3, 15); 
   currency: number = 34; 
  decimal: number =  3.14159265359;
  percent: number = 23;
  text: string = "gOod moRning"
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  arr: string[] = ["mango","grape","apple","banana"];


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
