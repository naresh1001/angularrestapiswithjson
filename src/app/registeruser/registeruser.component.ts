import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  }
  doRegister(user){
    //console.log(user);
    this.registerService.createUser(user).subscribe((response)=>{
      console.log("value Inserted");
    })
  }

}
