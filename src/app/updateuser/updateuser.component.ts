import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  userid: number;
  userObj: Object;
  constructor(private route:ActivatedRoute,private registerService:RegisterService   ) { }

  ngOnInit() {
        let id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.userid=id;
        this.getUser(this.userid);

  }
  
  getUser(userid){
    this.registerService.getUser(userid).subscribe((response)=>{
      this.userObj=response;
      //console.log(response);
    }) 
   }
   updateUser(userForm){
    this.registerService.updateUser(this.userObj).subscribe((response)=>{
      userForm.reset();
  })
  
  }



}
