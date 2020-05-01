import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'api_services/user_control/_user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  loading = false;
  submitted = false;

  constructor(private router:Router,
              private fb:FormBuilder,
              private userService: UserService
             
             ){}

  ngOnInit()
  {
          this.registerForm = this.fb.group({
            firstName: ['',[Validators.required]],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

   get f() { return this.registerForm.controls; }


  Onsubmit()
  {
    this.loading = true;
    this.submitted = true;

    if (this.registerForm.invalid) 
    {
          return;
    }
    this.userService.register(this.registerForm.value).pipe(first())
          .subscribe(
            (data)=>{
              if(data.status)
              { 
                     this.router.navigate(['/login']);
              }
              else
              {
                        this.loading = false;
                        this.submitted = false;
                        this.registerForm.reset();
                        this.router.navigate(['/register']);
              }
            }
          )  
  }
}
