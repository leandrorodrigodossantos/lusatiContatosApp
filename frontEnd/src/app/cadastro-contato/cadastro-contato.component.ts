import { Component, Input } from '@angular/core';
import { GrupoContato } from '../persistences/grupo-contato';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.scss']
})
export class CadastroContatoComponent {
  @Input() gruposSelecionados: GrupoContato[] = [];
}
