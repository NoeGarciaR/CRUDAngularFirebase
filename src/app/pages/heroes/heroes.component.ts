import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faSpinner, faExclamationTriangle, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {HeroesService} from "../../services/heroes.service";
import {HeroeModel} from "../../../models/heroe.model";
import Swal from "sweetalert2";

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

  borrarHeroe( heroe: HeroeModel, i: number){
    Swal.fire({
      title: '¿Esta seguro?',
      text: `¿Desea eliminar a ${heroe.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.heroes.splice(i, 1);
        this.heroeService.borrarHeroe(heroe.id).subscribe();
        Swal.fire(
          'Eliminado',
          'Es heroe ha sido eliminado',
          'success'
        );
      }
    })
  }

}
