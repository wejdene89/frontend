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

  getFirstEvent()
  {
    return this.http.get(`${this.baseUrl}/eventfirst`)  ;
  }
  getFirstNew()
  {
    return this.http.get(`${this.baseUrl}/newfirst`)  ;
  }
  getAllNew()
  {
    return this.http.get(`${this.baseUrl}/newall`)  ;
  }
  getAllEvent()
  {
    return this.http.get(`${this.baseUrl}/eventall`)  ;
  }
  getAllPresentation()
  {
    return this.http.get(`${this.baseUrl}/presentationall`)  ;
  }
  getNew(id:number)
  {
    return this.http.get(`${this.baseUrl}/newfind/${id}`)  ;
  }
  getEvent(id:number)
  {
    return this.http.get(`${this.baseUrl}/eventfind/${id}`)  ;
  }
  deleteNew(id:number):Observable<{}>
  {
    return this.http.delete(`${this.baseUrl}/newdelete/${id}`);
  }
  deleteEvent(id:number):Observable<{}>
  {
    return this.http.delete(`${this.baseUrl}/eventdelete/${id}`);
  }
  deletePres(id:number):Observable<{}>
  {
    return this.http.delete(`${this.baseUrl}/presentationdelete/${id}`);
  }
  addEvent(data,Headers)
  {
    return  this.http.post(`${this.baseUrl}/event`,data,Headers);
  }
  addNew(data,Headers)
  {
    return  this.http.post(`${this.baseUrl}/new`,data,Headers);
  }
  updateNew(data,id,Headers)
  {
    return  this.http.post(`${this.baseUrl}/newupdate/`+id,data,Headers);
  }
  updateEvent(data,id,Headers)
  {
    return  this.http.post(`${this.baseUrl}/eventupdate/`+id,data,Headers);
  }

  getFile(id:number)
  {
    return this.http.get(`${this.baseUrl}/download/`+id)  ;
  }



}
