import { Component, signal } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { User } from '../interface/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm!:FormGroup;
  email:string='';
  password:string='';

  constructor(private formbuilder:FormBuilder,private http:HttpService,private router:Router){
    this.loginForm=formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  submitForm(){
    console.log("login form is ON");
    // console.log(this.loginForm.controls);
    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;
    this.http.login(this.email, this.password).subscribe({
      next: (res: any) => {
        let ans:any;
        res.forEach((element:User) => {
          if(element.email==this.email && element.password==this.password){
            if(element.email==this.email && element.password==this.password)ans=element;
          }
        });
        console.log("ans: ",ans);
        // Navigating to the dashboard on successful login
        if(ans)this.router.navigate(['/dashboard'])
          else alert("Wrong Credentials . Check it again");
      },
      error: (err: string) => {
        alert("Failed");
        console.log(err);
      }
    })
  }

  }

  

