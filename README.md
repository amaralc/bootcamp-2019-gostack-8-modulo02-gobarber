# bootcamp-2019-gostack-8-modulo02-gobarber

# Conceitos do Docker

Controlar serviços da aplicação
Como funciona?

## Criação de ambientes isolados;
> - Ambientes que não vão interferir em outras tecnologias (ou ferramentas) do nosso servidor;
> - Ex.: Caso precisemos instalar banco de dados, se instalarmos da maneira tradicional, iremos modificar vários arquivos
> do sistema, da máquina. Para atualizar ou modificar, podemos ter problemas;
> - Quando criamos ambientes isolados (subsistema da máquina), aquele sistema fica disconexo de outros serviços da aplicação;
> - Ex: Banco de dados fica em subsistema da máquina, que não interfere no funcionamento do restante;
> - Um subsistema dentro da máquina (container que subirmos com docker) jamais irá interferir em arquivos do restante da
> aplicação ou do sistema operacional;
> - Subsistemas expõem portas para fazer comunicação entre subsistemas;
> - Ex.: com o postgreSQL SQL, utilizamos a porta padrão 5432;
> - Ex.: no mySQL, temos a porta 3306;
> - Ex.: na aplicação rocketseat, utilizam a porta 3333;
> - Podemos utilizar localhost, porém as portas irão definir a forma de conectar;

## Exemplo com aplicação atual:
> - Aplicação teria acesso ao subsistema com PostgreSQL utilizando porta :5432;
> - Aplicação teria acesso ao susbistema com MongoDB utilizando porta :27017;

## Conceitos do docker:
> - Imagem: serviço disponível do docker (PostgreSQL, mySQL), ferramentas, tecnologias que podemos colocar dentro de containers nas aplicações;
> - Container: Instância de uma imagem;
>> - Ex.: podemos ter três containers (três bancos de dados Postgres) rodando com a mesma imagem;

>  - Docker Registruy (Docker Hub): onde encontramos essas imagens?
>> - Todas as dependências, e registros das dependências estão em uma nuvem, em um servidor (npmjs.com) onde estão todos os módulos do node;
>> - Registro onde estão todas as imagens do docker: Docker Registry;
>>> - Podemos cadastrar nossas próprias imagens lá;

> - Dockerfile:
>> - Receita de uma imagem;
>> - Define como a imagem da nossa aplicação deve funcionar em um ambiente do zero;
>>> - Ex: receita para aplicação rodar do zero em ambiente novo
>>> - FROM node:10
>>> - WORKDIR /usr/app
>>> - COPI . ./
>>> - RUN yarn
>>> - EXSPOSE 3333
>>> - CMD yarn start

# Configurando o Docker

Google -> Docker CE
docker.com/install
MAC -> install
Linux -> seguir alguns passos
Windows:
> - 10, 64 bits, Pro, Enterprise ou Education
> - Virtualização habilitada na BIOS ()
> - 4GB RAM min;

WE HAVE A PROBLEM! NEED TO INSTALL WINDOWS PRO!

DONE! WINDOWS PRO INSTALLED WITH TIPS FROM "hackem"

"E ai Amaral, blz? eu peguei o cupom(TYCSK) nesse vídeo: https://www.youtube.com/watch?v=ARznjD3KeXc&t=311s. O site pra comprar é esse aqui: https://www.vip-scdkey.com/software/microsoft-pc-10-pro-oem_1227-20.html. Você faz o cadastro no site e muda pra Brazil(português), que dai converte pra Real e depois de clicar em comprar, coloca o cupom TYCSK. Eu paguei com paypal, dai você recebe um email com o link pra pegar a cd-key."

# Sequelize & MVC

Sequelize é um ORM pra nodejs pra bancos de dados relacionais (mySQL, postgrees, SQLyte);

## ORM

> - Forma de abstrair o banco de dados;
> - Mudar forma com que o aplicação se comunica com banco de dados;
> - Arquitetura MVC (Models, Views, Controllers);
> - Tabelas viram models;
>> - User.js: model que representa a tabela Users do banco de dados;
>> - Company.js : model que representa a tabela Companies do banco de dados;
>> - Project.js : model que representa a tabela Projects do banco de dados;

## Manipulação dos dados

> - Sem SQL (na maioria das vezes);
> - Apenas código JavaScript;

SQL:
```
INSERT INTO users (name, email)
   VALUES (
     "myName",
     "myname@email.com"
   )

```

SEQUELIZE: Converte JavaScript to SQL

JavaScript:

```
User.create({
  name: 'myName',
  email: 'myname@email.com'
})

```

## Migrations

> - Controle de versão para base de dados;
> - Cada arquivo contém instruções para criação, alteração ou remoção de tabelas ou colunas;
> - Mantém a base atualizada entre todos os desenvolvedores do time e também no ambiente de produção;
> - Cada arquivo é uma migration e sua ordenação ocorre por data;

## Seeds

> - População da base de dados para desenvolvimento;
> - Muito utilizados para popular dados para testes;
> - Executável apenas por código;
> - Jamais será utilizado em produção;
> - Caso sejam dados que precisam ir para produção, a própria migration pode manipular dados das tabelas;

## Arquitetura MVC

> - Consiste em forma de estruturar pastas e arquivos na aplicação separando as
> responsabilidades de cada tipo de arquivo;
> - Agentes principais:
>> - Model;
>> - Controller;
>> - View;

> - **Model**: armazena a abstração do banco, utilizado para manipular os dados contindos nas tabelas do banco. **NÃO POSSUEM RESPONSABILIDADE SOBRE AS REGRAS DE NEGÓCIO DA APLICAÇÃO**;
> - **Controller**: O controller é o ponto de entrada das requisições da nossa aplicação, uma rota geralmente está associada diretamente com um método do controller. **PODEMOS INCLUIR A GRANDE PARTE DAS REGRAS DE NEGÓCIO DA APLICAÇÃO NOS CONTROLLERS** (conforme a aplicação cresce podemos isolar as regras);
> - **View**: A view é o retorno ao cliente, em aplicações que não utilizam o modelo de API REST isso pode ser um HTML, mas usando o modelo de API REST a view é apenas o JSON que será retornado ao front-end e depois manipulado pelo ReactJS ou React Native.

## A face de um controller

> - Durante o curso, controllers serão criados em forma de Classes;
> - Sempre retorna um JSON (para resposta ou erro);
> - Jamais chama outro controller ou método dele mesmo; O método do controller deve ser suficiente para funcionar sozinho;
> - Quando criar um novo controller? Toda vez que criarmos uma nova entidade na aplição;
>> - Entidade não é o mesmo que model;
>> - Geralmente cada model terá seu próprio controller;
>> - Podemos ter controllers que não tenha model;
>> **Ex.:** Aplicação com autenticação;
>>> - Temos model de usuário (usuário é quem se autentica);
>>> - No momento da autenticação (nova sessão), o controller não será um "user controller" pois não estamos criando um usuário, estamos criando uma sessão.
>>> - Nesse caso, seria um "session controller";

>> - Controller terá apenas 5 métodos;
>>> Ex.:
>>>
>>> ```
>>> class UserController {
>>>   index(){} // Listagem de usuários
>>>   show(){} // Exibir um único usuário
>>>   store(){} // Cadastrar usuário
>>>   update(){} // Alterar usuário
>>>   delete(){} // Remover usuário
>>> }
>>>
>>> ```


# ESLint, Prettier & EditorConfig

> - Configurar ferramentas para padronizar código;
> - Ex.:  utilizar ";", " ", ",", " ' ", e outros;
> - Qual padrão utilizar?
> - Ex: Padrao Airbnb
> - Terminal -> `yarn add ESLint`
> - ESLint: Faz o "linting" do código (verifica se segue certos padrõe)

# Configurando Sequelize

# Migration de usuário

# Model de usuário

# Criando loader de models

# Cadastro de usuários

# Gerando hash da senha

# Conceitos de JWT

JWT: Forma de fazer autenticação em API REST (serviços restful, comunicados através de JSON);
JWT = JSON Web Token (token em forma de JSON);

Ex.: POST http://api.com/sessions

```
{
  "email": pessoa@email.com",
  "password": "123456"
}
```

> - Rota faz verificações necessárias, busca informações no banco de dado e se tudo estiver correto, gera Token JWT;
> - Token gerado a partir de uma biblioteca;
> - Token criptografado
>> - Headers (Tipo de token, algoritmo);
>> - Payload (Dados adicionais);
>>> - Dados adicionais que enviamos ao autenticar (email, nome, id);

>> - Assinatura (garante que o token não foi modificado por outro usuário);

> - Formato: Headers.Payload.Assinatura
> - Criptografado (Ex.:): abkasdUnkdundPaAqq.HkdjbALjdgKDHGGdkdgfjg.ALKDghldjAlkJAKgdk















