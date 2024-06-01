import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  userForm:any;
  formWarning:any;

  constructor(private formBuilder: FormBuilder, private router:Router){}

  ngOnInit():void{
    this.userForm = this.formBuilder.group({
      firstName:["", Validators.required],
      lastName:["",Validators.required],
      email:["", [Validators.required, Validators.email]],
      mobile:["",[Validators.required,Validators.pattern('[0-9]{10}')]],
      age : ["",[Validators.required,Validators.min(20), Validators.max(50)]],
      gender:["", Validators.required],
      companyName:["",Validators.required]
    })
  }

  submitForm():void{
    console.log(this.userForm);
    if(this.userForm?.valid){
      this.router.navigate([""]);
      alert("Log In Successfull");
    }else{
      this.router.navigate(["signup"]);
      this.formWarning = "enter correct details";
      alert("Wrong Credentials");
    }
  }
  closeSignupForm(){
    this.router.navigate([""]);
  }

  onFocus(){
    this.formWarning =""; 
  }
}
