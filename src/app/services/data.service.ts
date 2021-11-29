import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUsername=""
  data:any={
    1000:{acno:1000,uname:"akshay",password:"1000",balance:5000},
    1001:{acno:1001,uname:"akash",password:"1001",balance:5000},
    1002:{acno:1002,uname:"ashwin",password:"1002",balance:5000}
  
  }

  constructor() { 
    this.getDetails()
  }

  saveDetails(){
    if(this.data){
      localStorage.setItem("data",JSON.stringify(this.data))
    }
    if(this.currentUsername){
      localStorage.setItem("currentUsername",JSON.stringify(this.currentUsername))
    }
  }

  getDetails(){
    if(localStorage.getItem("data")){
      this.data=JSON.parse(localStorage.getItem("data")||'')
    }
    if(localStorage.getItem("currentUsername")){
      this.currentUsername=JSON.parse(localStorage.getItem("currentUsername")||'')
    }
  }
  register(acno:any,uname:any,password:any){
    let database=this.data
    if(acno in database){
      return false
    }
    else{
      database[acno]={
        acno,
        uname,
        password,
        balance:0

      }
      this.saveDetails()
      return true
    }
  }
  login(acno:any,pswd:any){
    let database=this.data
    if(acno in database){
    if(pswd==database[acno]["password"]){
     this.currentUsername= database[acno]["uname"]
     this.saveDetails()


      return true
    }
    else{
      alert("invalid password")
      return false
    }
  }
  else{
    alert("user does not exist")
    return false
  }
}

deposit(acno:any,password:any,amnt:any){

   var amount=parseInt(amnt)
  let database=this.data
  if(acno in database){
    if(password==database[acno]["password"]){
      database[acno]["balance"]=database[acno]["balance"]+amount
      return database[acno]["balance"]
      

  }
  else{
    alert("invalid password")

    return false

  }
}
  else{
    alert("user  not exist")
    return false
  }

}
withdraw(acno1:any,password1:any,amnt1:any){

  var amount=parseInt(amnt1)
 let database=this.data
 if(acno1 in database){
   if(password1==database[acno1]["password"]){

    if(database[acno1]["password"]>amount){
      
      database[acno1]["balance"]=database[acno1]["balance"]-amount
      return database[acno1]["balance"]
 
    }
    else{
      alert("insufficient balance")
      return false
    }
    
 }
 else{
   alert("invalid password")
   return false

 }
}
 else{
   alert("user  not exist")
   return false
 }

}
}
  


