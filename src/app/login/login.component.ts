import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';



import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="your perfect banking partner"
// accno="account number please"
acno=""
pswd=""

loginForm=this.fb.group({
 
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
})

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // accnochange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)
  // }
  // pswdchange(event:any){
  //   this.password=event.target.value
  //   console.log(this.password)
  // }
login(){
  var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd
  if(this.loginForm.valid){
    var result=this.ds.login(acno,pswd)
  if(result){

  alert("login success")
  this.router.navigateByUrl('dashbo')

  }
  
}
}
}
// function pswd(acno: string, pswd: any) {
//   throw new Error('Function not implemented.');
// }


