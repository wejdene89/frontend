import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup , Validators,FormControl} from "@angular/forms";
import { ServiceService} from '../Services/service.service';
import { TokenService } from '../Services/token.service';
import { AuthService } from '../Services/auth.service';
import {Router} from '@angular/router';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  form: FormGroup;
  error =null;
  data:any;
 
constructor(private router:Router ,private  Services:  ServiceService,private Token:TokenService,public notif: SnotifyService,private Auth:AuthService,public fb: FormBuilder) 
{ 
        this.form = this.fb.group({
          nom: new FormControl(null, [ Validators.required]),
          prenom: new FormControl(null,[ Validators.required]),
          email: new FormControl(null,[ Validators.required,Validators.email]),
          numtel: new FormControl(null, [Validators.minLength(8),Validators.maxLength(8), Validators.required]),  
          password: new FormControl(null, [Validators.minLength(8),Validators.maxLength(20),Validators.required]),
          password_confirmation: new FormControl(null, [Validators.minLength(8),Validators.maxLength(20),Validators.required]),
       }); 
          
}


Effacer()
{   
  this.form = this.fb.group({
    nom: new FormControl(null, [ Validators.required]),
    prenom: new FormControl(null,[ Validators.required]),
    email: new FormControl(null,[ Validators.required,Validators.email]),
    numtel: new FormControl(null, [Validators.minLength(8),Validators.maxLength(8), Validators.required]),  
    password: new FormControl(null, [Validators.minLength(8),Validators.maxLength(20),Validators.required]),
    password_confirmation: new FormControl(null, [Validators.minLength(8),Validators.maxLength(20),Validators.required]),
  }); 

      
}
     
onSubmit()
{
   var formData: any = new FormData();
   formData.append("nom", this.form.get('nom').value);
   formData.append("prenom", this.form.get('prenom').value);
   formData.append("email", this.form.get('email').value);
   formData.append("numtel", this.form.get('numtel').value);
   formData.append("password", this.form.get('password').value);
   formData.append("password_confirmation", this.form.get('password_confirmation').value);
   formData.append("role", null);
     console.log(formData);
  
          this.Services.signup(formData).subscribe(
            data=>this.handleResponse(data),
            error=>this.handleError(error));
}
    
handleResponse(data)

{ //var datauser :any;
  this.Auth.changedAuthStatus(true);
  this.Token.handle(data.access_token);
 // this.Auth.changedUser(datauser);
   if(data.role=="admin")
    {
      this.router.navigate(['/admin']);
    }
    if(data.role==null)
    {
      this.router.navigate(['/profile']);
    }
}

handleError(error)
{
 this.error = error.error.errors;
   if(error.error.errors.email != null)
      {
        this.error = 'Email existe déja';
        this.notif.error(this.error,{timeout:3000});
      }
   if(error.error.errors.password != null)
      {
        this.error = 'Mot de passe n\'est pas conforme';
        this.notif.error(this.error,{timeout:4000});
      }

}


   
ngOnInit()
{
  this.notif.info('Tous les champs sont obligatoires ',{timeout:5000});
}


get nom() {return this.form.get('nom');}
get prenom() {return this.form.get('prenom');}
get email() {return this.form.get('email');}
get numtel() {return this.form.get('numtel');}
get password() {return this.form.get('password');}
get password_confirmation() { return this.form.get('password_confirmation');}
  
}
