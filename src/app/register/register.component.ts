import { DataService } from './../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router,private ds:DataService) { }

  registerform=this.formbuilder.group({username:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
mail:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\.@]+')]],
password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]})

  ngOnInit(): void {
  }

  register(){
    var username=this.registerform.value.username
    var mail=this.registerform.value.mail
    var password=this.registerform.value.password

    if(this.registerform.valid){
      console.log(this.registerform.get('mail')?.errors);
      this.ds.register(username,mail,password)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')
      },
      
      result=>{
        alert(result.error.message)
      })
      
    }
    }


}
