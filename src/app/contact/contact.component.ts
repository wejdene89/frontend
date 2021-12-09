import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators,FormControl} from "@angular/forms";
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  Contactform: FormGroup;
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  myData: any;
  constructor(public fb: FormBuilder,private http: HttpClient) {
    this.Contactform = this.fb.group({
      name: new FormControl(null,[ Validators.required]),      
      email: new FormControl(null, [Validators.required,Validators.email]),
      numtel: new FormControl(null, [Validators.required]),
      country: new FormControl(null),
      subject:  new FormControl(null, [Validators.required]),
      message:  new FormControl(null, [Validators.required]),
    });

   }

  ngOnInit(): void {
    this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
      const countries = [];
      for (let i = 0; i < resp.length; ++i) {
          const country = resp[i];
          countries.push({ text: country.text, value: country.value , image: "https://img.mobiscroll.com/demos/flags/"+country.value+".png"});
      }
      this.myData = countries;
    });
  


  }
  onSubmit()
  {   
     
  }
  
  handleError(error)
  {
      
  }
     
  handleResponse(data)
  {   
       
     
  }
}
