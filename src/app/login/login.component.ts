import { Component, signal } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
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

  constructor(private formbuilder:FormBuilder){
    this.loginForm=formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  submitForm(){
    console.log("login form is ON");
    console.log(this.loginForm.controls);
  }

  
}
