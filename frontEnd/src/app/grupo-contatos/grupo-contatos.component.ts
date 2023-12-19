import { Component, Input } from '@angular/core';
import { GrupoContato } from './../persistences/grupo-contato';
import { GrupoContatoService } from './../services/grupo-contato.service';

@Component({
  selector: 'app-grupo-contatos',
  templateUrl: './grupo-contatos.component.html',
  styleUrls: ['./grupo-contatos.component.scss']
})
export class GrupoContatosComponent {
  grupo?: GrupoContato;
  public gruposDisponiveis: GrupoContato[] = [];

  @Input()gruposSelecionados: GrupoContato[] = [];

  constructor(
    private grupoContatoService: GrupoContatoService
    ) {}

  ngOnInit(): void {
    this.getGrupoContatos();
    //this.contatoForm.patchValue(this.data);
  }

  getGrupoContatos() {
    this.grupoContatoService.getGrupoContatoAtivos().subscribe(data => {
      this.gruposDisponiveis = data;
    });
  }

  adicionarGrupo(grupo: GrupoContato | undefined): void {
    if(this.gruposDisponiveis.length > 0){
    this.gruposSelecionados.push(grupo!);
    this.gruposDisponiveis = this.gruposDisponiveis.filter((g) => g !== grupo);
    }
  }

  removerGrupo(grupo: GrupoContato | undefined): void {
    if(this.gruposSelecionados.length > 0){
    this.gruposDisponiveis.push(grupo!);
    this.gruposSelecionados = this.gruposSelecionados.filter((g) => g !== grupo);
    }
  }

}
