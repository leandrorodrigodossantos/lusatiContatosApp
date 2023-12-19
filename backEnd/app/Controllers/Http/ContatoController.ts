import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Contato from "App/Models/Contato";

export default class ContatoController {
  public async index({ response }: HttpContextContract) {
    const contatos = await Contato.query()
    .select("contatos.*", "contatos_grupocontatos.grupocontato_id")
    .leftJoin(
      "contatos_grupocontatos",
      "contatos.id",
      "=",
      "contatos_grupocontatos.contato_id"
    )
    .orderBy("contatos.id", "desc")
    .groupBy("contatos.id");

    response.status(200);
    return contatos;
  }

  async store({ request, response }) {
    const { contato, grupos } = request.body();
    const existingEmail = await Contato.findBy('dsEmail', contato.dsEmail);
    const existingCelular = await Contato.findBy('nrCelular', contato.nrCelular);

    if (existingEmail && existingCelular) {
      return response.status(400).json('E-mail e Celular já cadastrado.');
    }
    const novoContato = await Contato.create(contato);
    await novoContato.related("grupos").attach(grupos.map((grupo) => grupo.id));
    return novoContato;
  }

  async update({ params, request, response }) {
    try {
      const contatoId = params.id;
      const { contato, grupos } = request.body();
      const contatoExistente = await Contato.find(contatoId);
      if (!contatoExistente) {
        return response.status(404).json({ message: "Contato não encontrado" });
      }
      contatoExistente.merge(contato);
      await contatoExistente.save();
      if (grupos) {
        await contatoExistente
          .related("grupos")
          .sync(grupos.map((grupo) => grupo.id));
      }

      return contatoExistente;
    } catch (error) {
      return response.status(500).json({ message: "Erro interno no servidor" });
    }
  }

  public async show({ params }: HttpContextContract) {
    const contato = await Contato.findOrFail(params.id);
    return contato;
  }

  public async destroy({ params, response }: HttpContextContract) {
    const contato = await Contato.findOrFail(params.id);
    await contato.related("grupos").detach();
    await contato.delete();
    return response.status(204);
  }
}
