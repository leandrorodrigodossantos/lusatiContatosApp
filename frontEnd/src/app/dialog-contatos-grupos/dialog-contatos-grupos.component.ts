import { Component, Input } from '@angular/core';
import { GrupoContato } from '../persistences/grupo-contato';

@Component({
  selector: 'app-dialog-contatos-grupos',
  templateUrl: './dialog-contatos-grupos.component.html',
  styleUrls: ['./dialog-contatos-grupos.component.scss']
})
export class DialogContatosGruposComponent {
  @Input()
  gruposSelecionados: GrupoContato[] = [];

}
