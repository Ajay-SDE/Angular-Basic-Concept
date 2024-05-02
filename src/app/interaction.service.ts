import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  //This is Subject class which will be used for reactive programming
  private _messageBody = new Subject<string>();

  //The person who wanna use this stream they should subscribe it
  public useMessageBody$ = this._messageBody.asObservable();
  
  SendMessage(message:string){
    this._messageBody.next(message);
  }

  constructor() { }
}
