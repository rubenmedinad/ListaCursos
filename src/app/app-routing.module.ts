import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ModifcacionesComponent } from './modifcaciones/modifcaciones.component';
import { listacurso } from './modulos/listacursos';

const routes: Routes = [
  {path: '',component: ListaComponent,children: [
      { path: 'modificar/:id', component: ModifcacionesComponent },
      { path: 'alta/:id', component: ModifcacionesComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
