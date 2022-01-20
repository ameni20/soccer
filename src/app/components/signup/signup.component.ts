import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { MustMatch } from 'src/app/validator/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:['', [Validators.minLength(5), Validators.required]],
      lastName:['', Validators.maxLength(7)],
      email:[''],
      pwd:['', [Validators.required, Validators.minLength(8)]],
      confirmPwd:[''],
      tel:['']
    } ,
    {
      validator: MustMatch('pwd', 'confirmPwd')
    })
  }

  
  signUp(obj:any) {
    console.log('This is my user', obj);
    this.userService.signup(obj).subscribe(
      () => {
        console.log('User added successfully');
        this.router.navigate(['']);
      }
    )
  }

  onButtonClicked(){
    alert('Btn clicked')
  }

}
