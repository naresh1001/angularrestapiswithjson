import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  allUsers: Object;
  isEdit =false;
  userObj={
    username:'',
    email:'',
    password:'',
    address:'',
    mobile:'',
    id:''
  }

  constructor(private registerService:RegisterService, private router:Router) { }

  ngOnInit() {
    this.getAllUsers();
  }
  doRegister(user){
    //console.log(user);
    this.registerService.createUser(user).subscribe((response)=>{
      console.log("value Inserted");
      this.router.navigate(["/userlist"]);
     // this.getAllUsers(); 
    })
  }
  getAllUsers(){
   this.registerService.getUsers().subscribe((response)=>{
     this.allUsers=response;
   }) 
  }


}
