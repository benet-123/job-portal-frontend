import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }
loginform=this.formbuilder.group({email:['',[Validators.required,Validators.pattern('[a-z0-9\.@]+')]],
password:['',[Validators.required,Validators.pattern('[0-9a-z]+')]]})
  ngOnInit(): void {
  }

}
