import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContatoService } from './../services/contato.service';
import { SnackBarService } from './../services/snackbar.service';
import { GrupoContatoService } from './../services/grupo-contato.service';
import { GrupoContato } from './../persistences/grupo-contato';
import { DialogContatosGruposComponent } from '../dialog-contatos-grupos/dialog-contatos-grupos.component';

@Component({
  selector: 'app-contatos-lista',
  templateUrl: './contatos-lista.component.html',
  styleUrls: ['./contatos-lista.component.scss'],
})
export class ContatosListaComponent {
  displayedColumns: string[] = [
    'id',
    'dsContato',
    'nrCelular',
    'dsEmail',
    'grupocontatoId',
    'stAtivo',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  gruposDeContato: GrupoContato[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private contatoService: ContatoService,
    private grupoContatoService: GrupoContatoService,
    private snackbarService: SnackBarService
  ){}

  ngOnInit(): void {
    this.getContatoLista();
    this.getGrupoContatos();
  }

  adicionarContato() {
    const dialogRef = this.dialog.open(DialogContatosGruposComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getContatoLista();
        }
      },
    });
  }

  getContatoLista() {
    this.contatoService.getContatoLista().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  getGrupoContatos() {
    this.grupoContatoService.getGrupoContatoLista().subscribe(data => {
      this.gruposDeContato = data;
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletarContato(id: number) {
    this.contatoService.delContato(id).subscribe({
      next: () => {
        this.snackbarService.openSnackBar('Contato removido!', 'done');
        this.getContatoLista();
      },
      error: console.log,
    });
  }

  editarContato(data: any) {
    const dialogRef = this.dialog.open(DialogContatosGruposComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getContatoLista();
        }
      },
    });
  }

  getDsGrupo(id: number): string  | undefined {
    const grupo = this.gruposDeContato.find(g => g.id === id);
    return grupo?.dsGrupocontato
  }

  getDsStAtivo(codigo: number): string {
    codigo = (codigo === undefined || codigo === null) ? 0 : codigo;
    return codigo === 0 ? 'Inativo' : 'Ativo';
  }
}
