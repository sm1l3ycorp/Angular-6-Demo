import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export type appState = 'in' | 'out';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    currenState: appState = 'out';

    get showList() {
      return this.currenState === 'in';
    }
  
    get showLogin() {
      return this.currenState === 'out';
    }
  
    toggleState(type: appState) {
      this.currenState = type;
    }

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
           userName: ['Username', [Validators.required]],                   
           password: ['Password', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)]] 
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;        
        
        // stop here if form is invalid
        if (this.loginForm.invalid) {            
            return;
        }
        console.log('SUCCESS');
        this.toggleState('in');
    }
}