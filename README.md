# bootcamp-2019-gostack-8-modulo02-gobarber

# Conceitos do Docker

Controlar serviços da aplicação
Como funciona?

##Criação de ambientes isolados;
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

##Exemplo com aplicação atual: 
> - Aplicação teria acesso ao subsistema com PostgreSQL utilizando porta :5432;
> - Aplicação teria acesso ao susbistema com MongoDB utilizando porta :27017;

##Conceitos do docker:
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

## Configurando o Docker

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









