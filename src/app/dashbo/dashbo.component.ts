import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbo',
  templateUrl: './dashbo.component.html',
  styleUrls: ['./dashbo.component.css']
})
export class DashboComponent implements OnInit {
  acno=""
  password=""
  amnt=""

  acno1=""
  password1=""
  amnt1=""

  depositForm=this.fb.group({
   
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amnt:['',[Validators.required,Validators.pattern('[0-9]*')]],

  })
  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]*')]],

  })
  user=this.ds.currentUsername

  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.depositForm.value.acno
    var password=this.depositForm.value.password
    var amount=this.depositForm.value.amnt
    if(this.depositForm.valid){
      var result=this.ds.deposit(acno,password,amount)
   if(result){
   alert( amount+"credited successfully,,new balance is:"+result)
   }

  }
}
  withdraw()
  {
    var acno=this.withdrawForm.value.acno1
    var password=this.withdrawForm.value.password1
    var amount=this.withdrawForm.value.amnt1
    if(this.withdrawForm.valid){
      var result=this.ds.withdraw(acno,password,amount)
   if(result){
   alert( amount+"debited successfully,,new balance is:"+result)
   }

  }
    
  }

  }
  