import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';

const routes: Routes = [
  {
    path: "",
    component: ListaTarefasComponent
  },
  {
    path: "adicionar",
    component: AdicionarTarefaComponent
  }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
