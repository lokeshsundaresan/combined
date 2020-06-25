import { Component, OnInit } from '@angular/core';
import { UserService } from '../../api_services/user_control/_user.service';
import { User } from 'interface/user';
import { ChatService } from '../../api_services/chat.service';
import { MessageModel } from 'interface/message';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  list:User[]=[];
  onshow=false;
  message:string;
  selectedchats:string;
  messageArray:MessageModel[]=[];
  messagesent:MessageModel;
  sender:string;
  loadMessage=[];

  constructor(private users:UserService,private chat:ChatService) {

    this.chat.newMessageReceive().subscribe(data=>{this.messageArray.push(data);
                                             })
   }

  ngOnInit() {

    this.users.currentUser.subscribe(data=>{this.sender=data.username})
  
    this.users.getuser().subscribe(
      data=>{this.list=data;
             this.list=this.list.filter(item=>item.username !== this.sender)
           }
    )
    
  }
  loadconversation()
  {    
    this.chat.loadMessage(this.sender,this.selectedchats).subscribe(data=>this.messageArray=data);
  }
  selectchat(item:User)
  {
    this.selectedchats=item.username;
    this.loadconversation();
    this.onshow=true;
  
  }
  
  sendmessage()
  {
     this.messagesent=new MessageModel(this.sender,this.selectedchats,this.message);
    this.chat.sendmessage(this.messagesent);
    this.loadconversation();
  }

}
