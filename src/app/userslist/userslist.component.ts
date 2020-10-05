import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
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
