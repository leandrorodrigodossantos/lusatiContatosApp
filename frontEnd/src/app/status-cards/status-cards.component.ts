import { Component, OnInit } from '@angular/core';
import { GrupoContatoService } from './../services/grupo-contato.service';
import { ContatoService } from './../services/contato.service';

@Component({
  selector: 'app-status-cards',
  templateUrl: './status-cards.component.html',
  styleUrls: ['./status-cards.component.scss']
})
export class StatusCardsComponent implements OnInit {
  todosRegistros: number = 0;
  registrosAtivos: number = 0;
  registrosInativos: number = 0;

  constructor(
    private contatoService: ContatoService
  ) {}

  ngOnInit() {
    this.getContatoLista();
  }

  getContatoLista() {
    this.contatoService.getContatoLista().subscribe(
      (res) => {
        for (let index = 0; index < res.length; index++) {
          if(res[index].stAtivo === 1)
            this.registrosAtivos = this.registrosAtivos + 1
          else
          this.registrosInativos = this.registrosInativos + 1;
        }
        this.todosRegistros = res.length;
    });
  }
}
