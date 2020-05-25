import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { MessageModel } from '../interface/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

private socket=io('https://chats--lokeshvirtusa.repl.co');

sendmessage(message:MessageModel)
{
   this.socket.emit('message',message);
}

newMessageReceive()
{
  let observable=new Observable<any>(res=>{
    this.socket.on('new message',data=>{
      res.next(data);
    });
  });
  return observable;
}

loadMessage(sender:String,receiver:String)
{
    this.socket.emit('loadmessage',{sender,receiver})
    return this.fetchmessage();
}
fetchmessage()
{
  let observable=new Observable<any>(res=>{
    this.socket.on('fetchmessage',data=>{
      res.next(data);
    });
  });
  return observable;
}

}



