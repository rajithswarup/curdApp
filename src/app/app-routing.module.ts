import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { ServicedeskComponent } from './servicedesk/servicedesk.component';
import { EdwdashboardComponent } from './edwdashboard/edwdashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'business',component:BusinessComponent},
  {path:'servicedesk',component:ServicedeskComponent},
  {path:'edwdashboard',component:EdwdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  ``
