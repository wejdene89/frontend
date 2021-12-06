import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import{ RouterModule , Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent }  from './profile/profile.component';
import { AdminComponent }  from './admin/admin.component';
import {BoardComponent} from "./organisation/board/board.component";
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import {ResponseResetComponent} from './password/response-reset/response-reset.component';
import {RequestResetComponent} from './password/request-reset/request-reset.component';
import {MemberCountriesComponent} from "./organisation/member-countries/member-countries.component";
import {RepresentativesComponent} from "./organisation/representatives/representatives.component";
import {PastPresidentsComponent} from "./history/past-presidents/past-presidents.component";
import {ComingSoonComponent} from "./18PaunsCongress/coming-soon/coming-soon.component";
import {ObjectivesComponent} from "./organisation/objectives/objectives.component";
import {PastBoardsComponent} from "./history/past-boards/past-boards.component";
import {HistoryComponent} from "./history/history/history.component";
import {PastCongressesComponent} from "./Event/past-congresses/past-congresses.component";
import {PastMeetingsComponent} from "./Event/past-meetings/past-meetings.component";
import {ContactComponent} from "./contact/contact.component";

const appRoutes: Routes = [
  {
    path:'Contact',
    component: ContactComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'PastMeetings',
    component: PastMeetingsComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'PastCongresses',
    component: PastCongressesComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'History',
    component: HistoryComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'PastBoards',
    component: PastBoardsComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'Objectives',
    component: ObjectivesComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'ComingSoon',
    component: ComingSoonComponent,
    canActivate:[BeforeLoginService]
  },
  {
    path:'board',
    component: BoardComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path:'Member',
    component: MemberCountriesComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path :"PastPresidents",
    component:PastPresidentsComponent,
    canActivate : [BeforeLoginService]
  },
  {
    path:'Representatives',
    component: RepresentativesComponent,
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
