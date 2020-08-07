import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faSmileWink, faDizzy, faSave } from '@fortawesome/free-solid-svg-icons';
import {HeroeModel} from "../../../models/heroe.model";
import {NgForm} from "@angular/forms";
import {HeroesService} from "../../services/heroes.service";
import Swal from 'sweetalert2';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

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

  heroe: HeroeModel = new HeroeModel();

  constructor( private heroeService: HeroesService,
               private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if ( id !== 'nuevo' ){
        this.heroeService.getHeroe(id).subscribe( (resp: HeroeModel) => {
          this.heroe = resp;
          this.heroe.id = id;
        });
      }
  }

  guardar (form: NgForm){
    if (form.invalid){
      console.log('Formulario No Valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: "info",
      allowOutsideClick: false
    });

    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroeService.actualizarHeroe(this.heroe);
    } else {
       peticion = this.heroeService.crearHeroe(this.heroe);
    }

    peticion.subscribe((respuesta: any) => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        icon: "success"
      });
    });

  }
}
