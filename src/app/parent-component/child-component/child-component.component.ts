import { Component, Input, OnInit, Output ,EventEmitter, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit,AfterViewInit {

  fieldValue:string;

  @ViewChild('productCollection') Divelement:ElementRef;

  @Output() emitValue = new EventEmitter<string>();

  @Input() products;

  //This is the variable i am gonna assign the variable
  streamRender : string;

  constructor(private ineraction:InteractionService) { }

  ngOnInit(): void {
    this.ineraction.useMessageBody$.subscribe((message)=>{
      this.streamRender = message;
    })
  }


  ngAfterViewInit(): void {
    console.log(2)
    this.Divelement.nativeElement.style.backgroundColor = 'yellow'
  }

  

  SendData(){
    this.emitValue.emit(this.fieldValue)
  }
}
