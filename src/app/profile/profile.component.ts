import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public safeURL: SafeResourceUrl;
  tabpres:  any;
  tabname:any;
  name:any;
  constructor(private  Services: ServiceService, private _sanitizer: DomSanitizer) {
    this.Services.getAllPresentation().subscribe(data =>
      {
        this.tabpres = data ;
        for(let i=0;i<this.tabpres.length;i++) {
          this.tabpres[i].video = 'https://www.youtube.com/embed/' + this.tabpres[i].video.split('v=')[1].split('&')[0];
          this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.tabpres[i].video);
          this.tabpres[i].video = this.safeURL;
          this.tabpres[i].pres = this.tabpres[i].pres.split('public/');
         // this.name =  this.tabpres[i].pres[1].split('file/')[1];
         // this.tabname[i] =   this.name ;
        //  this.tabpres[i].pres =  'http://localhost:8000/storage' + this.tabpres[i].pres[1];
  
           console.log(this.tabpres);
        }
      },error => console.error(error));
  
  
   }

  ngOnInit(): void {
  }

}
