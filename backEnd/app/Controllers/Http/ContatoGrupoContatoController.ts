import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ContatoGrupoContato from './../../Models/ContatoGrupoContato';
import ContatoGrupoContatoValidator from './../../Validators/ContatoGrupoContatoValidator';

export default class ContatoGrupoContatoController {

  public async index({ response }: HttpContextContract) {
    const groups = await ContatoGrupoContato.query().orderBy('id', 'desc');
    response.status(200);
    return groups
  }

  public async store({ request, response }: HttpContextContract) {
    const groupData = await request.validate(ContatoGrupoContatoValidator);
    const group = await ContatoGrupoContato.create(groupData);
    response.status(201);
    return group;
  }
}
