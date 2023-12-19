import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ContatoGrupoContato extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contatoId: number

  @column()
  public grupocontatoId: number

  static get table() {
    return 'contatos_grupocontatos'
  }
}
