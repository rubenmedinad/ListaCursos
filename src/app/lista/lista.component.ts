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
    this.cursos = this.serviciocursos.getcurso();
  }

  anadir() {
    this.serviciocursos.anadircurso(this.curso);
    this.curso = new listacurso(0, '', 0, nivel.alto);
  }
  modificar() {
    this.serviciocursos.modificarcurso(this.ids, this.curso);
    this.curso = new listacurso(0, '', 0, nivel.alto);
  }
  update(number: number) {
    this.ids = number;
    console.log(this.ids);
  }
}
