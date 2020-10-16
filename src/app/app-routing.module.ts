import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  {path:'register',component:RegisteruserComponent},
  {path:'userlist',component:UserslistComponent},
  {path:'updateuser/:id',component:UpdateuserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
