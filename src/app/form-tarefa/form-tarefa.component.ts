import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TarefaService } from '../services/tarefa.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-tarefa',
  templateUrl: './form-tarefa.component.html',
  styleUrls: ['./form-tarefa.component.css']
})
export class FormTarefaComponent {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private tarefaservice: TarefaService,
    private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      descricao: '',
      data: '',
      urgente: false
    });
  }

  async salvarTarefa() {
    await firstValueFrom(this.tarefaservice.adicionar(this.checkoutForm.value));
    alert("Tarefa add com sucesso");
    this.router.navigate([""]);
  }


}


