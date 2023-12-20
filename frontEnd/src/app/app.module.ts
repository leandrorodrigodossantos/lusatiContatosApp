import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContatosAddEditComponent } from './contatos/contatos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContatosListaComponent } from './contatos-lista/contatos-lista.component';
import { GrupoContato } from './persistences/grupo-contato';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { GrupoContatosComponent } from './grupo-contatos/grupo-contatos.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StatusCardsComponent } from './status-cards/status-cards.component';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatosAddEditComponent,
    ContatosListaComponent,
    GrupoContatosComponent,
    HeaderComponent,
    FooterComponent,
    ContatosAddEditComponent,
    StatusCardsComponent,
    CadastroContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTabsModule,
  ],
  providers: [GrupoContato],
  bootstrap: [AppComponent],
})
export class AppModule {}
