# lusatiContatosApp
Teste para implementação de Crud

Sistema de Controle de Contatos e Grupos
Este é um sistema desenvolvido para atender à necessidade da empresa de controlar os Conatos e Grupos cadastrados. A aplicação concentra-se nos elementos principais, que são "Contatos" e "Grupos".

Pré-requisitos
Antes de começar, certifique-se de ter os seguintes requisitos instalados:

Node.js
npm (Node Package Manager)
Banco de dados MySQL
Instalação
Clone este repositório:
bash
Copy code
git clone https://github.com/leandrorodrigodossantos/lusatiContatosApp.git
Navegue até o diretório do projeto:

bash
Copy code
cd nome-do-repositorio
Instale as dependências:

bash
Copy code
npm install
Configure o arquivo .env com as informações do banco de dados:

plaintext
Copy code
DB_CONNECTION=mysql
DB_HOST=seu-host
DB_PORT=sua-porta
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=nome-do-banco

bash
*Execute as migrações para criar as tabelas no banco de dados, caso sejá necessário.
Copy code
adonis migration:run

Inicie o servidor:

bash
Copy code
npm run --dev

Utilização
Gerenciamento de Contatos
 * Ao iniciar o sistema será apresenta a tela com a listagem dos contatos cadastros ou uma lista vazia.

Você pode através desta tela:
 * Visualizar nos cards a quantidade de registros, total, ativos e inativos.
 * Existe o campo filtro onde é possível buscar um registro através de qualquer termo de pesquisa.
 * Adicionar um novo contato atravé do botão +
 * Edit um contato através do botão que tem um icone em forma de lápis.
 * Deletar um contato através do botão que tem um icone em forma de lixeira.

Licença
Este projeto está licenciado sob a Licença MIT.