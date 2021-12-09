import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup , Validators,FormControl} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mdb-angular-free';

  successAlert = false;
  form: FormGroup;
  eng: any;
  constructor(public fb: FormBuilder,private router:Router)
  {
    this.form = this.fb.group({
      list: new FormControl(null,[ Validators.required]),

    });


  }
  ngOnInit(): void {


  }


    onSubmit(){
    console.log(this.form.get('list').value)
    if(this.form.get('list').value=="eng")
    {

       this.eng =  "eng";
    }
    if(this.form.get('list').value=="arbe")
    {

       this.eng =  "arbe";
    }
  }
  get list() {return  this.form.get('list');}
  copyToClipboard(value: string): void {
    const tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    this.successAlert = true;

    setTimeout(() => {
      this.successAlert = false;
    }, 900);
  }


}
