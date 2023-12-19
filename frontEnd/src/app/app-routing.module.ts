import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosListaComponent } from './contatos-lista/contatos-lista.component';

const routes: Routes = [
  { path: 'lista-contatos', component: ContatosListaComponent },
  { path: '', redirectTo: '/lista-contatos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
