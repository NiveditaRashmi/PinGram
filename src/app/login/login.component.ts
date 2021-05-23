import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  details= [];
  onSubmit() {
    console.log(this.loginForm);
    this.details = this.loginService.check(this.loginForm.value);
    console.log("details", this.details)
    if(this.details[0] == true) {
      this.router.navigate(['user', this.details[1] ]);
      console.log("yiksjdfkj")
    }

  }

  register() {
    alert("This service is not implemented yet.")
  }

}
