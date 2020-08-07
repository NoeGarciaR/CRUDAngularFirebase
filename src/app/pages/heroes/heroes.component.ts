import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faSpinner, faExclamationTriangle, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {HeroesService} from "../../services/heroes.service";
import {HeroeModel} from "../../../models/heroe.model";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faSpinner = faSpinner;
  faExclamationTriangle = faExclamationTriangle;
  faPen = faPen;
  faTrash = faTrash;

  heroes : HeroeModel[] = [];

  constructor( private heroeService: HeroesService ) { }

  ngOnInit(): void {
    this.heroeService.getHeroes().subscribe( (resp: any) => {
      this.heroes = resp;
    } );
  }

}
