import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { TokenService } from '../Services/token.service';
import { FormBuilder, FormGroup , Validators,FormControl} from "@angular/forms";
import { AuthService } from '../Services/auth.service';
import {Router} from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  error =null;
  user : any;
  data:any;
  message:any;
  

  constructor(private router:Router ,private  Services: ServiceService, private  Token: TokenService , 
   private Auth:AuthService, public fb: FormBuilder )
{ 
      this.form = this.fb.group({
       email: new FormControl(null,[ Validators.required,Validators.email]),      
       password: new FormControl(null, [Validators.minLength(8),Validators.required])}); 
}

onSubmit()
{   
     var formData: any = new FormData();
     formData.append("email", this.form.get('email').value);
     formData.append("password", this.form.get('password').value);
      return this.Services.login(formData).subscribe(
       data=>this.handleResponse(data),
       error=>this.handleError(error)
      );
}

handleError(error)
{
     this.error = error.error.error; 
     this.message="verifier votre  données"
}
   
handleResponse(data)
{   
     this.Token.handle(data.access_token);
     var userauth = {
     nom :  data.nom,
     prenom: data.prenom
    }
     this.Token.getUser(data.role);
     this.Auth.changedAuthStatus(true);
     this.Auth.changedUser(this.Token.getUser(userauth));
    if(data.role=="admin")
    {
      this.router.navigate(['/admin']);
      console.log(this.Auth.authUser);
    }
   else
    {
      this.router.navigate(['/profile']);
     
    }  
   
}
ngOnInit()
{
   
}

get email() { return this.form.get('email');}
get password() { return this.form.get('password');}

}