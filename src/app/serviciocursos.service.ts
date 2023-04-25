import { Injectable } from '@angular/core';
import { listacurso } from './modulos/listacursos';
import { nivel } from './modulos/nivel';

@Injectable({
  providedIn: 'root',
})
export class ServiciocursosService {
  constructor() {}

  micurso: listacurso[] = [
    new listacurso(1, 'Matematicas', 120, nivel.medio),
    new listacurso(2, 'Lengua', 120, nivel.medio),
    new listacurso(3, 'Conocimiento', 120, nivel.medio),
    new listacurso(4, 'Administracion', 120, nivel.medio),
  ];
  anadircurso(curso: listacurso) {
    this.micurso.push(curso);
  }
  modificarcurso(id: number, nuevafactura: listacurso) {
    let dato = this.micurso.findIndex((micurso) => micurso.id == id);
    if (dato != -1) {
      this.micurso[dato] = nuevafactura;
    }
  }
  getcurso(): listacurso[] {
    return this.micurso;
  }
}
