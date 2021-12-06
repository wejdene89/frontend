import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-congresses',
  templateUrl: './past-congresses.component.html',
  styleUrls: ['./past-congresses.component.scss']
})
export class PastCongressesComponent implements OnInit {
  isHidden1 = true;

  constructor() { }

  ngOnInit(): void {
  }

}
