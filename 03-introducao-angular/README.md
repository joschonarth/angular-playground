<p align="center">
  <img src="../assets/angular.png">
</p>

# 🅰️ Angular 

O Angular CLI (Command Line Interface) é uma ferramenta de linha de comando que ajuda a automatizar o processo de desenvolvimento de aplicações Angular. Ele permite que você crie projetos, adicione arquivos, e execute uma variedade de tarefas de desenvolvimento, como testes, empacotamento e implantação, tudo através de comandos simples.

## Índice

- [Instalação](#instalação)
- [Rodando o Projeto](#rodando-o-projeto)
- [Comandos Principais](#comandos-principais)
- [Documentação](#documentação)

## Documentação 📄

- Para mais informações sobre Angular, consulte a [documentação oficial](https://angular.dev/overview).

## Instalação 🚀

**1. Instalar Node.js e npm:**

* Acesse o site oficial do Node.js ([nodejs.org](https://nodejs.org/en)).
* Baixe a versão recomendada para a maioria dos usuários (LTS).
* Execute o instalador baixado e siga as instruções para instalar o Node.js e o npm.
* Em seguida, execute: `npm install` para instalar todas as dependências do Node.js.


**2. Instale o Angular CLI globalmente:**

```bash
npm install -g @angular/cli
```

**3. Verifique se a instalação foi bem-sucedida:**

* Após a instalação, você pode verificar se o Angular CLI foi instalado corretamente com o seguinte comando:

```bash
ng version
```
* Este comando exibirá a versão do Angular CLI instalada, juntamente com as versões do Node.js e npm.

## Rodando o Projeto 🚀

Após a instalação das dependências, você pode rodar o projeto localmente.

**1. Crie o projeto: **

```bash
ng new nome-do-projeto
```

**2. Acesse o Diretório do Projeto:**

```bash
cd nome-do-projeto
```

**3. Inicie o servidor de desenvolvimento:**

```bash
ng serve
```

**4. Abra o navegador e acesse:**

```
http://localhost:4200/
```

* A aplicação será recarregada automaticamente se você executar o comando `ng serve -o`.

## Principais Comandos ⌨️

| Comando     | Descrição                                                 |
|-------------|-----------------------------------------------------------|
| `ng new`    | Cria um novo projeto Angular.                              |
| `ng generate` | Gera e/ou modifica arquivos baseados em esquemas.       |
| `ng serve`  | Compila a aplicação e inicia um servidor de desenvolvimento. |
| `ng build`  | Compila a aplicação para produção.                         |
| `ng test`   | Executa os testes unitários da aplicação.                  |
| `ng e2e`    | Executa os testes end-to-end.                              |
| `ng add`    | Adiciona suporte para bibliotecas externas.                |
| `ng update` | Atualiza a aplicação e suas dependências.                  |
| `ng lint`   | Executa análise de código para projetos Angular.           |

### Referências 🔍
- [Digital Innovation One](https://web.dio.me/).
- [Angular Com Felipão](https://felipe-aguiar.gitbook.io/angular-v17).
