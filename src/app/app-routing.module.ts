import { DataComponent } from './component/data/data.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'profile',component:ProfileComponent},
  { path:'data/:id',component:DataComponent},
  { path:'data1',component:DataComponent,data:{type:'data1'}},
  { path:'data2',component:DataComponent,data:{type:'data2'}},
  //ถ้า url ไม่ตรงจะวิ่งไป link ''
  { path:'**',redirectTo:'',pathMatch:'full'},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
