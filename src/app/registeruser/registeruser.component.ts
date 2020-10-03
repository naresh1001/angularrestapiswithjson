import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';


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

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  doRegister(user){
    //console.log(user);
    this.registerService.createUser(user).subscribe((response)=>{
      console.log("value Inserted");
      this.getAllUsers(); 
    })
  }
  getAllUsers(){
   this.registerService.getUsers().subscribe((response)=>{
     this.allUsers=response;
   }) 
  }
  deleteMe(user){
    this.registerService.deleteUser(user).subscribe((response)=>{
    this.getAllUsers(); 
    })
  }
  editUser(user){
    this.isEdit=true;
    this.userObj=user;
  }  
  updateUser(userForm){
    this.isEdit =!this.isEdit;
    this.registerService.updateUser(this.userObj).subscribe((response)=>{
      this.getAllUsers();
      userForm.reset();
  })
  
  }

}
