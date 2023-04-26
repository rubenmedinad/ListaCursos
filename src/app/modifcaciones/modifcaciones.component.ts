import { Component } from '@angular/core';
import { listacurso } from '../modulos/listacursos';
import { nivel } from '../modulos/nivel';
import { ServiciocursosService } from '../serviciocursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifcaciones',
  templateUrl: './modifcaciones.component.html',
  styleUrls: ['./modifcaciones.component.css'],
})
export class ModifcacionesComponent {
  curso: listacurso = new listacurso(0, '', 0, nivel.alto);

  cursos: listacurso[] = [];

  ids: number = 0;

  constructor(
    private serviciocursos: ServiciocursosService,

    private activarrutas: ActivatedRoute,

    private rutes: Router
  ) {
    this.cursos = this.serviciocursos.getcurso();
  }

  ngOnInit() {
    this.activarrutas.queryParams.subscribe(data => {
      this.ids = data['ids'];
      if(this.ids != 0)
      this.curso = this.serviciocursos.getcursobyid(this.ids)!;
  })
  }
  modificar(): void {
    this.serviciocursos.modificarcurso(this.ids, this.curso);
    this.curso = new listacurso(0, '', 0, nivel.alto);
    this.rutes.navigate(['']);
  }
  anadir() {
    this.curso.id = this.cursos[this.cursos.length - 1].id + 1;
    this.serviciocursos.anadircurso(this.curso);

    this.rutes.navigate(['']);
  }
  cancelar() {
    this.rutes.navigate(['']);
  }
}
