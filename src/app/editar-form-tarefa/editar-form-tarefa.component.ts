import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tarefa, TarefaService } from '../services/tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar-form-tarefa',
  templateUrl: './editar-form-tarefa.component.html',
  styleUrls: ['./editar-form-tarefa.component.css']
})
export class EditarFormTarefaComponent implements OnInit {

  checkoutForm: FormGroup;
  tarefaId: string | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.checkoutForm = this.formBuilder.group({
      descricao: '',
      data: '',
      urgente: false
    });
  }

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    this.tarefaId = routeParams.get("tarefaId");

    if (this.tarefaId) {
      const tarefa = await firstValueFrom(this.tarefaService.buscarporId(this.tarefaId));
      let formatedDate = this.datePipe.transform(tarefa.data, 'yyyy-MM-dd');
      this.checkoutForm.patchValue({
        data: formatedDate,
        descricao: tarefa.descricao,
        urgente: tarefa.urgente,
      });
    }
  }

  async salvarTarefa() {
    if (this.tarefaId) {
      await firstValueFrom(this.tarefaService.atualizarPeloId(this.tarefaId, this.checkoutForm.value));
    this.router.navigate([""]);
    }
  }
}

