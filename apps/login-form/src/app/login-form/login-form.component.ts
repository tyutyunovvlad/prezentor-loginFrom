import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmailService } from '../email.service'
@Component({
  selector: 'prezentor-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email: string
  password: string
  emailError: boolean

  constructor(private http: HttpClient, private emailService: EmailService) { }

  ngOnInit(): void {
  }


  getEmail(email:string):void {
    this.emailService.getEmail(email)
      .subscribe(isUsed => {
        this.emailError = (isUsed === 'true')
      })
  }

  submit() {
    this.getEmail(this.email)
  }

  onChange() {
    this.emailError = false
  }

}
