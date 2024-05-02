import { Component, OnInit } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 
  constructor(private ineteraction:InteractionService) {
   
  }


  SendData(){
    this.ineteraction.SendMessage("Hai this is the meassage from the message child component");
  }

  ngOnInit(): void {
    
  }
  title = 'Sample';

  disable = false;

  products:string[] = ["Product 1" , "Product 2"]

  userContent = "Hello World";

  addProduct(){
    this.products.push(this.userContent);
  }
 
 
}
