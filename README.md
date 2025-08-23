<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

### Passo a Passo

**1. Clone o Repositório**
```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd nome-do-projeto
```

**2. Configure as Variáveis de Ambiente**
Este projeto utiliza um arquivo `.env` para gerenciar as variáveis de ambiente. Para configurar o seu, copie o arquivo de exemplo:

```bash
cp .env.example .env
```
> O arquivo `.env` já vem com os valores padrão para o ambiente Docker local. Não é necessário alterá-lo para executar o projeto. **Lembre-se de nunca comitar o arquivo `.env` no Git!**

**3. Instale as Dependências**
Execute o comando abaixo para instalar todas as dependências do projeto definidas no `package.json`:

```bash
npm install
```

**4. Inicie o Banco de Dados com Docker**
Este comando irá iniciar um container com o banco de dados PostgreSQL em segundo plano:

```bash
docker-compose up -d
```
> Para parar o container, use `docker-compose down`.

**5. Execute as Migrations do Banco**
Com o banco de dados rodando, execute o comando abaixo para que o Prisma crie as tabelas conforme o `schema.prisma`:

```bash
npx prisma migrate dev
```

**6. Popule o Banco com Dados Iniciais (Seeding)**
Para ter dados de teste, execute o script de seeding:

```bash
npx prisma db seed
```
> Este script irá criar 10 clientes, 5 planos e 5 assinaturas, conforme solicitado no escopo do projeto.

**7. Inicie a Aplicação**
Agora, inicie o servidor NestJS em modo de desenvolvimento:

```bash
npm run start:dev
```
Você verá uma mensagem no terminal indicando que o servidor está rodando, geralmente em `http://localhost:3000`.

## 🧪 Testando a API

Com a aplicação rodando, você pode usar uma ferramenta como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar os endpoints.

A coleção do Postman para este projeto deve ser entregue conforme os requisitos da disciplina.

### Endpoints Disponíveis (Fase 1)

| Método | Rota                                  | Descrição                           |
| :----- | :------------------------------------ | :------------------------------------ |
| `GET`  | `/gestao/clientes`                    | Lista todos os clientes cadastrados.  |
| `GET`  | `/gestao/planos`                      | Lista todos os planos cadastrados.    |
| `POST` | `/gestao/assinaturas`                 | Cria uma nova assinatura.             |
| `GET`  | `/gestao/assinaturas/{tipo}`          | Lista assinaturas por tipo.           |
| `GET`  | `/gestao/assinaturascliente/{codcli}` | Lista as assinaturas de um cliente.   |
| `GET`  | `/gestao/assinaturasplano/{codplano}` | Lista os assinantes de um plano.      |
| `PATCH`| `/gestao/planos/{idPlano}`            | Atualiza o custo mensal de um plano.  |
