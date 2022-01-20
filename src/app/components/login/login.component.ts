import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = {};
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    })
  }
  loginUser() {
    this.userService.login(this.login).subscribe(
      data => {
        if (data) {
          location.reload();
          localStorage.setItem('connectedUserFname', data.user[0].firstName);
          localStorage.setItem('connectedUserLname', data.user[0].lastName);
        }
      }
    )
    this.router.navigate(['']);
  }

}
