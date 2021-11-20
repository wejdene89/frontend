import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import{ RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent }  from './profile/profile.component';
import { AdminComponent }  from './admin/admin.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
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
    canActivate: [AfterLoginService],

  },
  {
    path:'admin',
    component: AdminComponent,
    canActivate: [AfterLoginService],

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