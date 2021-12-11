import {AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import { ServiceService } from '../Services/service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
   event:any;
   new:any;
  cards = [
    {img: '../../assets/Societies_ logos/1-SNS.jpg'},
    {img: '../../assets/Societies_ logos/2- BNA.jpg'},
    {img: '../../assets/Societies_ logos/5- Jordan.png'},
    {img: '../../assets/Societies_ logos/7-LSN.png'},
    {img: '../../assets/Societies_ logos/8-Oman.png'},
    {img: '../../assets/Societies_ logos/11-SSN.jpg'},
    {img: '../../assets/Societies_ logos/12-EMINS.png'},
    {img: '../../assets/Societies_ logos/13-YNS.jpg'},
    {img: '../../assets/Societies_ logos/14-ESNPN.png'},
    {img: '../../assets/Societies_ logos/15-SSNS.jpg'},
    {img: '../../assets/Societies_ logos/18-SMN.jpg'},
    {img: '../../assets/Societies_ logos/20-ATN.jpg'},



  ];

  slides: any = [[]];

  constructor(private renderer: Renderer2,private  Services: ServiceService)
  { 
          this.Services.getFirstEvent().subscribe(data =>
            {   
              this.event = data ;
          
            },error => console.error(error));

            
          this.Services.getFirstNew().subscribe(data =>
            {   
              this.new = data ;
          
            },error => console.error(error));
  
  }

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.slides = this.chunk(this.cards, 7);
   
  }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-4');
      this.renderer.setStyle(el.parentElement, 'visibility','hidden');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
    const image = document.querySelectorAll('.imgcont');
    image.forEach((el: any) => {
      this.renderer.setStyle(el.firstElementChild, 'height','80px');
      this.renderer.setStyle(el.firstElementChild, 'width','300px');

    });

    const indicateur = document.querySelectorAll('.carousel-indicators');
    indicateur.forEach((el: any) => {

      this.renderer.setStyle(el,  'top','108px');


      for(let i=0;i<=2;i++)
      {
      this.renderer.setStyle(el.childNodes[i], 'background-color','#e03a3c');

      }
     ;
    });
  }
}
