import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faSpinner = faSpinner;
  faExclamationTriangle = faExclamationTriangle;
  constructor() { }

  ngOnInit(): void {
  }

}
