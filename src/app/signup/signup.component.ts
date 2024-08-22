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
    this.name = this.signupForm.get('name')?.value;
    this.mobileNo = this.signupForm.get('mobileNo')?.value;
    this.email = this.signupForm.get('email')?.value;
    this.password = this.signupForm.get('password')?.value;

    const newUser={
      name:this.name,
      mob:this.mobileNo,
      email:this.email,
      password:this.password
    };
    this.http.signup(newUser).subscribe({
      next: (res) => {
        console.log('User added:', res);
        alert('Signup successful');
        // Navigate to the login page or dashboard
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Error adding user:', err);
        alert('Signup failed');
      }

    })
    console.log(this.signupForm.controls);
  }
}
