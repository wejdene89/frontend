import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private baseUrl ='http://localhost:8000/api';
  constructor(private http: HttpClient) {}
  
   

   //user
   
 
   signup(data)
   {
     return  this.http.post(`${this.baseUrl}/create`,data);
   }

  
   login(data)
   {
    return  this.http.post(`${this.baseUrl}/login`,data) ; 
   }
  
   sendPasswordResetLink(data)
   {
    return this.http.post(`${this.baseUrl}/sendPasswordReset`,data)  ;
   }

   changePassword(data)
   {
    return this.http.post(`${this.baseUrl}/responsepasswordreset`,data)  ;
   }

   getAuthUser(header) 
   {
    return this.http.get(`${this.baseUrl}/user`,header)  ;
   }
  

}
