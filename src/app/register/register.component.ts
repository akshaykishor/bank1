import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pswd=""

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })
  

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  register(){
    

    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd

    if(this.registerForm.valid){
      var result=this.ds.register(acno,uname,pswd)
      if(result){
        alert("account created....please login")
        this.router.navigateByUrl('')
      }
      else{
        alert("account already exist")
        this.router.navigateByUrl('')
      }
      alert("register clicked!!!!!")
    }
    else{
      alert("form invalid!!!!!")
    }

    }
    

   

}
