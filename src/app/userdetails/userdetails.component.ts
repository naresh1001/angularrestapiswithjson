import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  allUsers: Object;

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.registerService.getUsers().subscribe((response)=>{
      this.allUsers=response;
    }) 
   }

}
