import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from '../services/snackbar.service';
import { ContatoService } from '../services/contato.service';
import { GrupoContato } from './../persistences/grupo-contato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})

export class ContatosAddEditComponent implements OnInit {
  contatoForm: FormGroup;

  stAtivo: { id: number; situacao: string }[] = [
    { id: 0, situacao: 'Inativo' },
    { id: 1, situacao: 'Ativo' },
  ];
  @Input() gruposSelecionados: GrupoContato[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatoService,
    private dialogRef: MatDialogRef<ContatosAddEditComponent>,
    private snackbarService: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.contatoForm = this.formBuilder.group({
            dsContato: '',
            nrCelular: '',
            dsEmail: '',
            stAtivo: 1,
          });
    }

  ngOnInit(): void {
    //this.getGrupoContatos();
    this.contatoForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.contatoForm.valid) {
      if (this.data) {
        this.contatosService
          .updContato(this.data.id, this.contatoForm.value, this.gruposSelecionados)
          .subscribe({
            next: (val: any) => {
              this.snackbarService.openSnackBar('Registro atualizado com sucesso!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              this.snackbarService.openSnackBar(JSON.stringify(err.error), 'done');
            },
          });
      } else {
        this.contatosService.insContato(this.contatoForm.value, this.gruposSelecionados).subscribe({
          next: (val: any) => {
            this.snackbarService.openSnackBar('Registro adicionado com sucesso');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            this.snackbarService.openSnackBar(JSON.stringify(err.error));
          },
        });
      }
    }
  }
}
