import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import{ RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent }  from './profile/profile.component';
import { AdminComponent }  from './admin/admin.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import {ResponseResetComponent} from './password/response-reset/response-reset.component';
import {RequestResetComponent} from './password/request-reset/request-reset.component';
const appRoutes: Routes = [
  { 
   path:'home',
   component: HomeComponent,
   canActivate: [BeforeLoginService],
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService],

  },

  {
    path:'profile',
    component: ProfileComponent,
   // canActivate: [AfterLoginService],

  },
  {
    path:'p',
    component: ProfileComponent,
   // canActivate: [AfterLoginService],

  },
  {
    path:'admin',
    component: AdminComponent,
    canActivate: [AfterLoginService],

  },
  {
    path:'response-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
 },
 {
  path:'requestreset',
  component: RequestResetComponent,
  canActivate: [BeforeLoginService]
},

];

@NgModule({
 declarations: [],
 imports: [
     RouterModule.forRoot(appRoutes),
         ],
  exports: [RouterModule]
})
export class AppRoutingModule { }