import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  private parentName: string="";
  private parentHobby: string="";

  constructor() { }

  getParentName(): string {
   return this.parentName;
  }

  getParentHobby(): string {
    return this.parentHobby;
  }

  setParentName(name: string): void {
   this.parentName = name;
  }

  
  setParentHobby(hobby: string): void {
    this.parentHobby = hobby;
   }
}
