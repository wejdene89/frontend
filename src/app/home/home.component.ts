import {AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  cards = [
    {img: '../../assets/countries/Algeria.png'},
    {img: '../../assets/countries/Comoros.jpg'},
    {img: '../../assets/countries/egypt.jpg'},
    {img: '../../assets/countries/Emirates.png'},
    {img: '../../assets/countries/Djibouti.jpg'}, 
    {img: '../../assets/countries/Bahrain.png'},
    {img: '../../assets/countries/Jordan.jpg'},
    {img: '../../assets/countries/Kuwait.png'},
    {img: '../../assets/countries/iraq.jpg'},
    {img: '../../assets/countries/Lebanon.jpg'},
    {img: '../../assets/countries/Libya.jpg'},
    {img: '../../assets/countries/Maroc.png'},
    {img: '../../assets/countries/Mauritania.png'},
    {img: '../../assets/countries/oman.jpg'},
    {img: '../../assets/countries/Palestine.jpg'},
    {img: '../../assets/countries/saudi.jpg'},
    {img: '../../assets/countries/Somalia.png'},
    {img: '../../assets/countries/sudan.jpg'},
    {img: '../../assets/countries/Syria.png'},
    {img: '../../assets/countries/Tunisia.png'},
    {img: '../../assets/countries/Yemen.png'},








  ];
  
  slides: any = [[]];
  
  constructor(private renderer: Renderer2) { }

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  ngOnInit() {
    this.slides = this.chunk(this.cards, 4);
  }
  
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-4');  
      this.renderer.setStyle(el.parentElement, 'visibility','hidden');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
    const indicateur = document.querySelectorAll('.carousel-indicators');
    indicateur.forEach((el: any) => {
       
      this.renderer.setStyle(el.childNodes, 'background-color','black');
    });

  }
}
