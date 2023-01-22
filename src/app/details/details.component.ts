import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }
  detailsform=this.formbuilder.group({name:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
email:['',Validators.required,Validators.pattern('[0-9a-z]+')],
address:['',Validators.required,Validators.pattern('[a-zA-Z0-9]+')],
pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-0\@]+')]],
number:['',[Validators.required,Validators.pattern('[0-9]+')]],
location:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
industry:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
department:['',[Validators.required,Validators.pattern('[z-zA-Z]+')]],
tenth:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
ten:['',[Validators.required,Validators.pattern('[0-9]+')]],
te:['',[Validators.required,Validators.pattern('[0-9\.]+')]],
twelve:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
twe:['',[Validators.required,Validators.pattern('[0-9]+')]],
tw:['',[Validators.required,Validators.pattern('[0-9\.]+')]],
names:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
passout:['',[Validators.required,Validators.pattern('[0-9]+')]],
mark:['',[Validators.required,Validators.pattern('[0-9\.]+')]]
})


  ngOnInit(): void {
  }

}
