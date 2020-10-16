import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

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


  constructor(private registerService:RegisterService,private router:Router) { }

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
    //this.isEdit=true;
    //this.userObj=user;
    this.router.navigate(["/updateuser",user.id]);
 }  

}
