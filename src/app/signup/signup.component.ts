import { Component, signal } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  signupForm!:FormGroup;
  name:string='';
  mobileNo:string='';
  email:string='';
  password:string='';

  constructor(private formbuilder:FormBuilder,private http:HttpService,private router:Router){
    this.signupForm=formbuilder.group({
      name:['',Validators.required],
      mobileNo:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  submitForm(){
    console.log(this.signupForm.controls);
  }
}
