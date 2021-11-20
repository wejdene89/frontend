import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public data :any;
  private loggedIn = new BehaviorSubject <boolean>(this.token.loggedIn());
  authStatus =this.loggedIn.asObservable();
  private user = new BehaviorSubject <any>(this.token.getUser());
  authUser =this.user.asObservable();
  
  changedAuthStatus(value:boolean)
  {
    this.loggedIn.next(value);
  }

 
  
  changedUser(value:any)
  {
    this.user.next(value);
    this.authUser.subscribe(value => this.data = value) ;
   
  }

 
  
 constructor(private token:TokenService) 
 { 
    this.data =  this.authUser.subscribe(value => this.data = value) ;
 }
 
}
