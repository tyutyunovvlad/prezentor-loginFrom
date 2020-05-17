import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmailService } from '../email.service'
import { customValidators } from '../custom.validators';
@Component({
  selector: 'prezentor-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup
  emailTaken = false

  @ViewChild('email', {static:false}) emailRef: ElementRef

  constructor(private http: HttpClient, private emailService: EmailService) { }
  


  ngOnInit(): void {
    
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        // customValidators.emailTaken
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }


  getEmail(email:string) {
    this.emailService.getEmail(email)
      .subscribe(isUsed => {
        this.emailTaken = (isUsed === 'true')
        if (this.emailTaken) {
          this.emailRef.nativeElement.classList.remove('ng-valid')
          this.emailRef.nativeElement.classList.add('ng-invalid')
        } else {
          this.emailRef.nativeElement.classList.remove('ng-invalid')
          this.emailRef.nativeElement.classList.add('ng-valid')

          this.addEmail(this.form.value.email)
          this.form.reset()
        }
        
      })
  }

  addEmail(email:string) {
    this.emailService.addEmail(email)
      .subscribe(a => {
        console.log(a)
      })
  }

  submit() {
    this.getEmail(this.form.value.email)  
  }
}
