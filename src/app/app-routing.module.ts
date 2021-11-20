import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import{ RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent }  from './profile/profile.component';
const appRoutes: Routes = [
  { 
   path:'home',
   component: HomeComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'signup',
    component: SignupComponent,
  },
  {
    path:'profile',
    component: ProfileComponent,
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