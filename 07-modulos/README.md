# Módulos no Angular

Os módulos no Angular são uma maneira de organizar e agrupar componentes, diretivas, pipes e serviços relacionados. Eles ajudam a manter o código modular, reutilizável e mais fácil de manter. Este documento explica como criar módulos e seguir boas práticas no desenvolvimento de aplicações Angular.

## Criando Módulos

Para criar um novo módulo no Angular, você pode usar o Angular CLI com o seguinte comando:

```bash
ng g m nome-do-modulo
```

Este comando gera automaticamente a estrutura básica de um módulo, incluindo o arquivo `nome-do-modulo.module.ts`, onde você pode definir as declarações, importações e exportações do módulo.

## Exemplo de Criação de Módulo

```bash
ng g m auth
```

Isso criará um módulo chamado `AuthModule`, que pode ser utilizado para agrupar todos os componentes, serviços e guardas relacionados à autenticação.

## Boas Práticas

### 1. Criação do Módulo "shared"

O módulo `shared` (ou `shared.module.ts`) é um módulo comum onde você pode colocar todos os componentes, diretivas e pipes que serão reutilizados em vários lugares da aplicação. Este módulo geralmente contém recursos que são compartilhados entre diferentes módulos ou partes da aplicação.

Comando para Criar o Módulo `shared`:

```bash
ng g m shared
```

### 2. Criação do Módulo "Pages"

O módulo `pages` (ou `pages.module.ts`) é um módulo que agrupa todas as páginas principais da aplicação. Cada página pode ser representada por um componente que se integra neste módulo. Esta abordagem ajuda a organizar as diferentes rotas e funcionalidades da aplicação em um único local.

Comando para Criar o Módulo `pages`:

```bash
ng g m pages
```

### 3. Estrutura Recomendada

Uma estrutura recomendada ao trabalhar com módulos em Angular é organizar seu projeto da seguinte forma:

```
src/
├── app/
│   ├── shared/
│   │   └── shared.module.ts
│   ├── pages/
│   │   └── pages.module.ts
│   └── app.module.ts

```

* **SharedModule**: Contém componentes, diretivas e pipes que serão usados em múltiplos módulos.
* **PagesModule**: Contém as principais páginas da aplicação, como **HomePage**, **AboutPage**, **ContactPage**, etc.
* **AppModule**: O módulo raiz que importa e organiza todos os outros módulos.

## Vantagens dos Módulos

* **Organização**: Os módulos ajudam a manter o código organizado e modular, facilitando a manutenção.
* **Reutilização**: Componentes e serviços em módulos como SharedModule podem ser facilmente reutilizados em diferentes partes da aplicação.
* **Carregamento sob demanda**: Módulos podem ser carregados sob demanda (lazy-loaded), o que melhora o desempenho da aplicação.