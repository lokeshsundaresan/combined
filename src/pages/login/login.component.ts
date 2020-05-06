import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../api_services/user_control/_user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted=false;
  loading=false;
  returnUrl: string;

  constructor(private fb:FormBuilder,private router:Router,private userService:UserService,private route: ActivatedRoute)
  {
     // redirect to home if already logged in
        if (this.userService.currentUserValue) { 
            
            this.router.navigate(['/']);
        }
        
  }
 
    ngOnInit()
    {
      this.loginForm=this.fb.group({
        username:['',Validators.required],
        password:['',[Validators.required]]
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
       get f(){return this.loginForm.controls;}

    onSubmit() 
    {
           this.loading=true;
           this.submitted = true;
           if(this.loginForm.invalid)
           {
              return;
           }

            this.userService.verify (this.loginForm.value).subscribe(
            data=> {
                  this.router.navigate(['/returnUrl']);
             },error=>{
                 this.loading=false;
                 this.submitted=false;
                this.loginForm.reset();
             }
           )
    }
}