import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';
import {HttpHeaders} from '@angular/common/http';
import { ServiceService } from '../Services/service.service';

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
  constructor(private auth:AuthService,private router:Router,private token:TokenService , private Services:ServiceService,private Auth:AuthService)
     {
      
     }

  ngOnInit(): void {
    
    this.auth.authStatus.subscribe(value => this.loggedIn = value) ;
    this.auth.authUser.subscribe(value => this.user = value) ;
    console.log(this.user);

  }
  logout(event:MouseEvent)
  {
  
    this.token1 = this.token.remove();
    this.router.navigateByUrl('/login');
    this.auth.changedAuthStatus(false);
 
   
  }
  
  

}
