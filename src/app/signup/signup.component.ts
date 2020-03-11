import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }
  submitForm(e){
    var emailForm = e.email;
    console.log(emailForm);

    var pwdForm = e.pwd;
    console.log(pwdForm);
  }
 
 
}
