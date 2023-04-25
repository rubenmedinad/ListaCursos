import { Component } from '@angular/core';
import { listacurso } from '../modulos/listacursos';
import { nivel } from '../modulos/nivel';
import { ServiciocursosService } from '../serviciocursos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  curso: listacurso = new listacurso(0, '', 0, nivel.alto);

  cursos: listacurso[] = [];

  ids: number = 0;

  constructor(private serviciocursos: ServiciocursosService) {
    this.cursos = this.serviciocursos.micurso;
  }
}
