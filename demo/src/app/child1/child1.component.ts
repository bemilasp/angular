import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parentName: string="";

 
  @Output() childName: EventEmitter<string> = new EventEmitter<string>();


  name: string = "Everything is possible";

  one: string="bemila"; 

  changeNameValue: string="";

  two: string="kovai";

  changeCityValue: string="";

  childValue: string="inisha";

  ngOnInit(): void {
  }

  changeInput(event: string): void {
    this.changeNameValue = event;
  }

  changeChild(event: string): void {
    this.childName.emit(event);
  }





}
