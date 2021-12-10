import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { FormBuilder, FormGroup , Validators,FormControl} from "@angular/forms";
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {New} from "../new";
import {Event} from "../event";
import {Presentation} from "../presentation";

import WebViewer from '@pdftron/webviewer';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public safeURL: SafeResourceUrl;
  tab : any;
  tabevent : any;
  tabpres:  any;
  form: FormGroup;
  form1: FormGroup;
  formpres: FormGroup;
  formupdate1: FormGroup;
  formupdate11: FormGroup;
  error =null;
  filedata:any;
  fileimage:any;
  fileimage1:any;
  filedata1:any;
  new:any;
  index:  number;
  event:any;
  index1: number;
  id: any;
  test: any;
  safeURL1:any;
  url:SafeResourceUrl;
  baseUrl ='';
  tabname =[];
  name:any;
  filedataEvent:any;


  @ViewChild('contentModal', { static: true }) public contentModal;
  @ViewChild('contentModal1', { static: true }) public contentModal1;
  @ViewChild('contentModalPresentation', { static: true }) public contentModalPresentation;

  @ViewChild('contentupdate', { static: true }) public contentupdate;
  @ViewChild('contentupdate1', { static: true }) public contentupdate1;

  constructor(private  Services: ServiceService,public notif: SnotifyService, public fb: FormBuilder,private _sanitizer: DomSanitizer)
  {

    this.form = this.fb.group({
      title: new FormControl(null,[ Validators.required]),
      description: new FormControl(null, [Validators.required]),
      file: new FormControl(null,[ Validators.required])
    });

    this.form1 = this.fb.group({
      title1: new FormControl(null,[ Validators.required]),
      description1: new FormControl(null, [Validators.required]),
      filenew: new FormControl(null)
    });
    this.formpres = this.fb.group({
      titlepres: new FormControl(null,[ Validators.required]),
      descriptionpres: new FormControl(null, [Validators.required]),
      filepres: new FormControl(null,[ Validators.required]),
      videopres: new FormControl(null,[ Validators.required])

    });

    this.formupdate1 = this.fb.group({
      title11: new FormControl(null,[ Validators.required]),
      description11: new FormControl(null, [Validators.required]),
      filenew11: new FormControl(null,[ Validators.required])
    });

    this.formupdate11 = this.fb.group({
      title111: new FormControl(null,[ Validators.required]),
      description111: new FormControl(null, [Validators.required]),
      filenew111: new FormControl(null,[ Validators.required])
    });


    this.Services.getAllNew().subscribe(data =>
    {
      this.tab = data ;

    },error => console.error(error));

    this.Services.getAllEvent().subscribe(data =>
    {
      this.tabevent = data ;
    },error => console.error(error));
    this.Services.getAllPresentation().subscribe(data =>
    {
      this.tabpres = data ;
      for(let i=0;i<this.tabpres.length;i++) {
        this.tabpres[i].video = 'https://www.youtube.com/embed/' + this.tabpres[i].video.split('v=')[1].split('&')[0];
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.tabpres[i].video);
        this.tabpres[i].video = this.safeURL;
        this.tabpres[i].pres = this.tabpres[i].pres.split('public');
        this.name =  this.tabpres[i].pres[1].split('file/')[1];
        this.tabname[i] =   this.name ;
        this.tabpres[i].pres =  'http://localhost:8000/storage' + this.tabpres[i].pres[1];


      }
    },error => console.error(error));


  }

  download(i)
  {
    let  winfact;
    winfact = window.open();
    winfact.document.write(`
    <html>
    <header>
    <title>Download</title>
    <Style>
    iframe{
      visibility: hidden;
    }
    span {
      text-align: center;
      padding-top: 50%;
      margin-left : 9%;
      font-size: 4rem;
      font-weight: bold;
      font-family: Arial;
    }
    </Style>
    </header>
    <body>
    <iframe src="${this.tabpres[i].pres}" frameborder="1" ></iframe>
    <span> File Download </span>
    </body>
    </html>


    `);
    winfact.document.close();


  }
  fileEvent(e)
  {
    this.filedataEvent = e.target.files[0];

  }
  fileNew(e)
  {
      this.filedata = e.target.files[0];
  }
  filedataPresentation:any;
  filePresentation(e)
  {
    this.filedataPresentation = e.target.files[0];

  }

  fileNewupdate(e)
  {
    this.filedata = e.target.files[0];
    this.formupdate1.patchValue({
      filenew11: this.filedata
    });
    this.formupdate1.get('filenew11').updateValueAndValidity();
  }
  fileEventupdate(e)
  {
    this.filedata = e.target.files[0];
    this.formupdate11.patchValue({
      filenew111: this.filedata
    });
    this.formupdate11.get('filenew111').updateValueAndValidity();
  }
  ngOnInit(): void {
  }
  //event add
  onSubmit()
  {
    var formData: any = new FormData();
    formData.append("titreevent", this.form.get('title').value);
    formData.append("descriptionevent", this.form.get('description').value);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    formData.append("imageevent", this.filedataEvent);
    this.Services.addEvent(formData,{headers: headers}).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error));
  }

  handleResponse(data)
  {
    this.tabevent.push(data);
    this.contentModal1.hide();
  }

  handleError(error)
  {
    this.error = error.error.errors;

  }
//new add
  onSubmitnew()
  {
    var formData: any = new FormData();
    formData.append("titrenews", this.form1.get('title1').value);
    formData.append("descriptionnews", this.form1.get('description1').value);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    formData.append("imagenews",this.filedata);
    this.Services.addNew(formData,{headers: headers}).subscribe(
      data=>this.handleResponse1(data),
      error=>this.handleError1(error));
  }
  handleResponse1(data)
  { this.tab.push(data);
    this.contentModal.hide();
  }

  handleError1(error)
  {
    this.error = error.error.errors;
    console.log(this.error);
  }
//presentation
  onSubmitPresentation()
  {
    var formData: any = new FormData();
    formData.append("titrenews", this.form1.get('title1').value);
    formData.append("descriptionnews", this.form1.get('description1').value);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    formData.append("imagenews", this.form1.get('filenew').value);
    this.Services.addNew(formData,{headers: headers}).subscribe(
      data=>this.handleResponsepres(data),
      error=>this.handleErrorpres(error));
  }
  handleResponsepres(data)
  { this.tab.push(data);
    this.contentModalPresentation.hide();
  }

  handleErrorpres(error)
  {
    this.error = error.error.errors;
    console.log(this.error);
  }
  remove(news: New):void
  {
    this.Services.deleteNew(news.id).subscribe(
      data=>{  this.notif.success('The new is  removed ',{timeout:5000});
      });
    this.tab=this.tab.filter(p=>p!==news);

  }
  removeEvent(events: Event):void
  {
    this.Services.deleteEvent(events.id).subscribe(
      data=>{  this.notif.success('The event is  removed ',{timeout:5000});
      });
    this.tabevent=this.tabevent.filter(p=>p!==events);

  }

  removePres(pres: Presentation):void
  {    console.log(pres);
    this.Services.deletePres(pres.id).subscribe(
      data=>{  this.notif.success('The presentation is  removed ',{timeout:5000});
        this.tabpres=this.tabpres.filter(p=>p!==pres);
        console.log(this.tabpres)
      });

    //this.tabname=this.tab.filter(p=>p!==pres);

  }

  add()
  {

    this.contentModal.show();

  }
  hide()
  {

    this.contentModal.hide();

  }
  addpres()
  {

    this.contentModalPresentation.show();

  }
  hidePresentation()
  {

    this.contentModalPresentation.hide();

  }
  add1()
  {

    this.contentModal1.show();

  }
  hide1()
  {

    this.contentModal1.hide();

  }
  hideupdate()
  {

    this.contentupdate.hide();

  }
  hideupdate1()
  {

    this.contentupdate1.hide();

  }
  updateNew(news: New, i:number):void
  {
    this.Services.getNew(news.id).subscribe(data =>
    {
      this.new = data ;
      this.index= i;
      console.log(this.index);
      this.contentupdate.show();

    },error => console.error(error));


  }
  updateEvent(event: Event,i: number):void
  {
    this.Services.getEvent(event.id).subscribe(data =>
    {
      this.event = data ;
      this.index1= i;
      this.contentupdate1.show();

    },error => console.error(error));

  }

//Update News
  onSubmitnewupdate()
  {
    var formData: any = new FormData();

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    if(this.formupdate1.get('title11').value ==  null)
    {
      formData.append("titrenews", this.new.titrenews);

    }
    else
    {
      formData.append("titrenews", this.formupdate1.get('title11').value);

    }
    if(this.formupdate1.get('description11').value ==  null)
    {
      formData.append("descriptionnews", this.new.descriptionnews);

    }
    else
    {
      formData.append("descriptionnews", this.formupdate1.get('description11').value);

    }
    if(this.formupdate1.get('filenew11').value ==  null)
    {
      formData.append("imagenews", this.new.imagenews);

    }
    else
    {
      formData.append("imagenews", this.formupdate1.get('filenew11').value);

    }

    this.Services.  updateNew(formData,this.new.id,{headers: headers}).subscribe(
      data=>this.handleResponseUpdate(data),
      error=>this.handleErrorUpdate(error));
  }
  handleResponseUpdate(data)
  {
    this.tab[this.index]=data;
    this.contentupdate.hide();
  }

  handleErrorUpdate(error)
  {
    this.error = error.error.errors;
    console.log(this.error);
  }
//Update Events
  onSubmitnewupdate1()
  {
    var formData: any = new FormData();

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    if(this.formupdate11.get('title111').value ==  null)
    {
      formData.append("titreevent", this.event.titreevent);

    }
    else
    {
      formData.append("titreevent", this.formupdate11.get('title111').value);
      console.log(this.formupdate11.get('title111').value)
    }
    if(this.formupdate11.get('description111').value ==  null)
    {
      formData.append("descriptionevent", this.event.descriptionevent);

    }
    else
    {
      formData.append("descriptionevent", this.formupdate11.get('description111').value);

    }
    if(this.formupdate11.get('filenew111').value ==  null)
    {
      formData.append("imageevent", this.event.imageevent);

    }
    else
    {
      formData.append("imageevent", this.formupdate11.get('filenew111').value);

    }

    this.Services.updateEvent(formData,this.event.id,{headers: headers}).subscribe(
      data=>this.handleResponseUpdate1(data),
      error=>this.handleErrorUpdate1(error));
  }
  handleResponseUpdate1(data)
  {
    this.tabevent[this.index1]=data;
    this.contentupdate1.hide();
  }

  handleErrorUpdate1(error)
  {
    this.error = error.error.errors;
    console.log(this.error);
  }
//add event
  get title() {return  this.form.get('title');}
  get description() {return this.form.get('description');}
  get file() {return  this.form.get('file');}
//add new
  get title1() {return  this.form1.get('title1');}
  get description1() {return this.form1.get('description1');}
  get filenew() {return  this.form1.get('filenew');}
//update new
  get title11() {return  this.formupdate1.get('title11');}
  get description11() {return this.formupdate1.get('description');}
  get filenew11() {return  this.formupdate1.get('filenew');}
//update event
  get title111() {return  this.formupdate1.get('title111');}
  get description111() {return this.formupdate1.get('description');}
  get filenew111() {return  this.formupdate1.get('filenew');}
}
