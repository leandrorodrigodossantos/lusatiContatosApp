import { Component, Input } from '@angular/core';
import { GrupoContato } from '../persistences/grupo-contato';
import { GrupoContatoService } from '../services/grupo-contato.service';
@Component({
  selector: 'app-contatos-grupo',
  templateUrl: './contatos-grupo.component.html',
  styleUrls: ['./contatos-grupo.component.scss']
})
export class ContatosGrupoComponent {

  grupoSelecionado?: GrupoContato;
  gruposDisponiveis: GrupoContato[] = [];

  @Input()
  gruposSelecionados: GrupoContato[] = [];

  @Input()
  gruposSelecionados2: GrupoContato[] = [];
  constructor(
    private grupoContatoService: GrupoContatoService,
    ) {}

  ngOnInit(): void {
    this.getGrupoContatos();
  }

  getGrupoContatos() {
    this.grupoContatoService.getGrupoContatoAtivos().subscribe(data => {
      this.gruposDisponiveis = data;

      if (this.gruposSelecionados.length > 0) {
        this.gruposSelecionados.forEach(grupoSelecionado => {
          this.gruposDisponiveis = this.gruposDisponiveis.filter(grupo => grupo.id !== grupoSelecionado.id);
        });
      }
    });
  }

  selecionarGrupo(grupo: GrupoContato): void {
    this.grupoSelecionado = grupo;
  }

  adicionarGrupo(): void {
    if (this.grupoSelecionado && !this.gruposSelecionados.includes(this.grupoSelecionado)) {
      this.gruposSelecionados.push(this.grupoSelecionado);
    }
  }

  removerGrupo(): void {
    if (this.grupoSelecionado) {
      this.gruposSelecionados = this.gruposSelecionados.filter(g => g !== this.grupoSelecionado);
      this.grupoSelecionado = undefined;
    }
  }
}
