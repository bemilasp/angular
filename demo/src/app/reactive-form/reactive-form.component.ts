import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from  '@angular/forms' 


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {



  cityNames = [
    {"cityName": "Kovai"},
    {"cityName": "Chennai"},
    {"cityName": "Salem"},
    {"cityName": "Puthur"},

  ];

  submitted:boolean = false;
  
 
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
    repassword: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required) 

  

  });
  
  onSubmit() {
    this.submitted = true;
    if(this.userForm.valid)
    console.log("submitted successfully");
    this.userForm.reset();
   }

  
   
 
  
 
  

  constructor( )
     { 
   
  }
 

  ngOnInit(): void {
     
  }

}
