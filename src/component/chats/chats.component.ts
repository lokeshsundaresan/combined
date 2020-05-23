import { Component, OnInit } from '@angular/core';
import { UserService } from 'api_services/user_control/_user.service';
import { User } from 'interface/user';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  list:User[]=[];
  constructor(private users:UserService) { }

  ngOnInit() {
    this.users.getuser().subscribe(
      data=>{this.list=data;
      console.log(this.list)}
    )
  }

}
