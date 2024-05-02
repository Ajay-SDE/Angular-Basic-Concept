import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit,AfterViewInit {

  constructor() { }
  @ViewChild(ChildComponentComponent) childcomponent:ChildComponentComponent;

  ngAfterViewInit(): void {
    console.log(1)
    this.childcomponent.fieldValue = "product Parent Invokcation Component";
    this.childcomponent.SendData();
    //Addede another commands
  }

 

  collection : string[] = ["product 1","product 2","product 3"]

  ngOnInit(): void {
  }

  HandleData(data:string){
   // let int:number = parseInt(data)
   this.collection.push(data)
   console.log(data);
   console.log(this.collection)
  }


  logUser(Form){
    if(Form.valid){
      console.log(Form);
    }
  }

}
