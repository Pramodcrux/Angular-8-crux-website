import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
    });
  }
  get f() { return this.loginForm.controls; }
 
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
   }
  
   onSubmit(){
     console.log("im working")
   }

}
