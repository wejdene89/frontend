import { Component, OnInit  } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FormBuilder, FormGroup , Validators,FormControl} from "@angular/forms";
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tabuser:any;
  constructor(private  Services: ServiceService,private router:Router,public notif: SnotifyService) { 
    this.Services.getAllUser().subscribe(data =>
      {
        this.tabuser = data ;
  
      },error => console.error(error));
  }

  ngOnInit(): void {
  }
  removeUser(user):void
  {
    this.Services.deleteUser(user.id).subscribe(
      data=>{  this.notif.success('The user is  removed ',{timeout:5000});
      });
     this.tabuser=this.tabuser.filter(p=>p!==user);
  }
  accepte(user: any,i: number)
  {
    console.log(user);
    console.log(i);
    var formData: any = new FormData();
    var acc = "accepte";
    formData.append("accepte", acc);
    this.Services.updateUser(formData,user.id).subscribe(
        data=>this.handleResponseuser(data),
        error=>this.handleErroruser(error));
  }
  
  handleResponseuser(data)
  {
    //this.tabuser=this.tabuser.filter(p=>p!==data); 
  }
  handleErroruser(error)
  {
    console.log(error);
  } 
}
