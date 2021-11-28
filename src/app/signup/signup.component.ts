import { Component, OnInit, AfterViewInit} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup , Validators,FormControl} from "@angular/forms";
import { ServiceService} from '../Services/service.service';
import { TokenService } from '../Services/token.service';
import { AuthService } from '../Services/auth.service';
import {Router} from '@angular/router';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  formCheck: FormGroup;
  data:any;
  checked: boolean;
  error =null;
  myData: any;
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
constructor(private http: HttpClient,private router:Router ,private  Services:  ServiceService,private Token:TokenService,public notif: SnotifyService,private Auth:AuthService,public fb: FormBuilder) 
{ 
        this.form = this.fb.group({
          nom: new FormControl(null, [ Validators.required]),
          prenom: new FormControl(null,[ Validators.required]),
          email: new FormControl(null,[ Validators.required,Validators.email]),
          numtel: new FormControl(undefined, [Validators.required]),  
          country : new FormControl(this.myData,[Validators.required]) ,
          password: new FormControl(null, [Validators.minLength(8),Validators.maxLength(20),Validators.required]),
          password_confirmation: new FormControl(null, [Validators.minLength(8),Validators.maxLength(20),Validators.required]),
       }); 
       this.formCheck =  this.fb.group({
        check: new FormControl(),
       });
          
}


Effacer()
{   
  this.form = this.fb.group({
    nom: new FormControl(null, [ Validators.required]),
    prenom: new FormControl(null,[ Validators.required]),
    email: new FormControl(null,[ Validators.required,Validators.email]),
    numtel: new FormControl(undefined, [Validators.required]),
    country : new FormControl(this.myData) ,  
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
   formData.append("numtel", this.form.get('numtel').value.internationalNumber);
   formData.append("pays", this.form.get('country').value);
   formData.append("password", this.form.get('password').value);
   formData.append("password_confirmation", this.form.get('password_confirmation').value);
   formData.append("role", null);

          if(this.formCheck.get('check').value == true)
         { this.Services.signup(formData).subscribe(
            data=>this.handleResponse(data),
            error=>this.handleError(error));
         }
         else {
          this.notif.error("Accept the terms of our service",{timeout:5000});

         }
         
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
     this.router.navigate(['/profile']);
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

  this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
    const countries = [];
    for (let i = 0; i < resp.length; ++i) {
        const country = resp[i];
        countries.push({ text: country.text, value: country.value , image: "https://img.mobiscroll.com/demos/flags/"+country.value+".png"});
    }
    this.myData = countries;
  });

}


get nom() {return this.form.get('nom');}
get prenom() {return this.form.get('prenom');}
get email() {return this.form.get('email');}
get numtel() {return this.form.get('numtel');}
get country() {return this.form.get('country');}
get password() {return this.form.get('password');}
get password_confirmation() { return this.form.get('password_confirmation');}
get  check() {return this.formCheck.get('check');}
}
