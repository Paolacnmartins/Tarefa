import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {
  tarefas = [
    {
      Titulo: "Estudar Typescript",
      data: new Date(),
      urgente: false
    },
    {
      Titulo: "Estudar Spring",
      data: new Date(),
      urgente: true

    },
    {
      Titulo: "Estudar Matemática",
      data: new Date(),
      urgente: true

    },
  ];
}
