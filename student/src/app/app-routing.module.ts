import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowusersComponent } from './showusers/showusers.component';

const routes: Routes = [
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"showusers",
    component:ShowusersComponent
  },
  {
    path:"farmerregistration",
    component:FarmerRegistrationComponent
  },
  {
    path:"",
    component:HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
