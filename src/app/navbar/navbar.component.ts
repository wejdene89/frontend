import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import {HttpHeaders} from '@angular/common/http';
import { ServiceService } from '../Services/service.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedIn:boolean;
  token1:any;
  data:any
  user:any;
  datauser:any;

  lang:any;
  constructor(private translate:TranslateService ,private auth:AuthService,private router:Router,private token:TokenService , private Services:ServiceService,private Auth:AuthService)
     {

     }

  ngOnInit(): void {

    this.auth.authStatus.subscribe(value => this.loggedIn = value) ;
    this.auth.authUser.subscribe(value => this.user = value) ;
    console.log(this.user);
    this.lang =  localStorage.getItem('lang');
    const headers = new HttpHeaders({
      'Accept-Language': this.lang
    });

  }

  logout(event:MouseEvent)
  {

    this.token1 = this.token.remove();
    this.router.navigateByUrl('/login');
    this.auth.changedAuthStatus(false);


  }
  profile(event:MouseEvent)
  {

    var header = {
      headers: new HttpHeaders().set('Authorization',`Bearer ${this.token.get()}`)
    }
    this.Services.getAuthUser(header).subscribe(data => {

      this.datauser = data;
      console.log(this.datauser.role);
      if(this.datauser.role =="admin")
      {
        this.router.navigateByUrl('/admin');

      }
      if(this.datauser.role == "null")
      {
        this.router.navigateByUrl('/profile');
      }


    }, error => console.error(error));


  }

}
