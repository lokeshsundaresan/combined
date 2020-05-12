import { Component, OnInit,Input } from '@angular/core';
import { UserService } from '../../api_services/user_control/_user.service';
import { User } from '../../interface/user';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  list:User[]=[];
  constructor(private users:UserService,private modalService:NgbModal) { }

  ngOnInit() {
    this.users.getuser().subscribe(
      data=>{this.list=data;}
    )
  }

  open(viewProfile:User)
  {
    const modalRef = this.modalService.open(modal, { ariaLabelledBy: 'view-profile',scrollable:true,size:'lg' });
    modalRef.componentInstance.profile=viewProfile;
     
  }

}
@Component({
  selector:"view-profile",
  templateUrl:'./friendmodal.component.html',
  styleUrls:['./friends.component.css']

})
export class modal{

  @Input() profile:User;
  constructor(public activeModal: NgbActiveModal) { }

}