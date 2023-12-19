import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Grupo from 'App/Models/Group'

export default class Contato extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public dsContato: string;

  @column()
  public nrCelular: string;

  @column()
  public dsEmail: string;

  @column()
  public stAtivo: boolean;

  @column()
  public grupocontatoId: number;

  @column()
  public todos: number;

  @column()
  public ativos: number;

  @column()
  public inativos: number;

  @manyToMany(() => Grupo, {
    pivotTable: 'contatos_grupocontatos',
    pivotForeignKey: 'contato_id',
    pivotRelatedForeignKey: 'grupocontato_id',
  })

  public grupos: ManyToMany<typeof Grupo>;

  static get table() {
    return 'contatos'
  }
}
