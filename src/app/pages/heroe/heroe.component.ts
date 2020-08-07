import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faSmileWink, faDizzy, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  faAngleDoubleLeft = faAngleDoubleLeft;
  faSmileWink = faSmileWink;
  faDizzy = faDizzy;
  faSave = faSave;

  constructor() { }

  ngOnInit(): void {
  }

}
