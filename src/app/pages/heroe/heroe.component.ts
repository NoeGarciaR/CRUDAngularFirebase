import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faSmileWink, faDizzy, faSave } from '@fortawesome/free-solid-svg-icons';
import {HeroeModel} from "../../../models/heroe.model";
import {NgForm} from "@angular/forms";

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

  heroe :HeroeModel = new HeroeModel();it

  constructor() { }

  ngOnInit(): void {
  }

  guardar (form: NgForm){
    if (form.invalid){
      console.log('Formulario No Valido');
      return;
    } else {
      console.log(form);
      console.log(this.heroe);
    }
  }
}
