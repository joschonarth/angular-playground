<p align="center">
  <img src="../assets/angular.png">
</p>

# 🅰️ Angular Life Cycle Hooks

Este documento fornece uma visão geral dos principais hooks do ciclo de vida dos componentes no Angular. Esses hooks permitem que você reaja a diferentes momentos do ciclo de vida de um componente, como a criação, mudanças de estado e destruição.

## 1. Inicialização

### 1.1 `ngOnInit()`
- **Descrição:** Chamado uma vez após a primeira renderização do componente e após a injeção de dependências. É utilizado principalmente para inicializar os dados do componente.
- **Exemplo de uso:** Configuração inicial, busca de dados de uma API, inicialização de variáveis.

## 2. Mudanças no Componente

### 2.1 `ngOnChanges()`
- **Descrição:** Executado quando um dos inputs ligados ao componente muda. Recebe um objeto de `SimpleChanges` que contém as mudanças.
- **Exemplo de uso:** Reagir a alterações de valores de propriedades @Input recebidas de um componente pai.

### 2.2 `ngDoCheck()`
- **Descrição:** Chamado durante cada ciclo de verificação de mudanças, mesmo se não houver alterações. Pode ser usado para customizar a lógica de verificação.
- **Exemplo de uso:** Implementação de verificação de mudanças personalizada que não pode ser capturada pelo `ngOnChanges`.

## 3. Eventos de Check

### 3.1 `ngAfterContentInit()`
- **Descrição:** Executado uma única vez após o conteúdo projetado dentro do componente ser inicializado.
- **Exemplo de uso:** Interagir com conteúdo que foi passado para o componente através de projeção (ng-content).

### 3.2 `ngAfterContentChecked()`
- **Descrição:** Chamado após cada verificação do conteúdo projetado. Isso ocorre após a inicialização do conteúdo e a cada verificação subsequente.
- **Exemplo de uso:** Atuar após a verificação do conteúdo projetado, por exemplo, para realizar ajustes ou verificações adicionais.

### 3.3 `ngAfterViewInit()`
- **Descrição:** Chamado uma vez após a visualização do componente, e todas as visualizações filhas, serem inicializadas.
- **Exemplo de uso:** Manipulação de elementos DOM que dependem da completa inicialização da visualização.

### 3.4 `ngAfterViewChecked()`
- **Descrição:** Executado após cada verificação da visualização do componente e das visualizações filhas.
- **Exemplo de uso:** Realizar verificações ou ajustes que devem ocorrer após todas as visualizações serem verificadas.

## 4. Evento ao Destruir

### 4.1 `ngOnDestroy()`
- **Descrição:** Chamado imediatamente antes de um componente ser destruído. Pode ser usado para limpar subscrições, observadores, ou outros recursos que precisam ser desalocados.
- **Exemplo de uso:** Desinscrição de observables, limpar timers ou listeners de eventos.

---

**Observação:** Compreender e utilizar adequadamente os Life Cycle Hooks no Angular permite que você gerencie eficazmente o ciclo de vida dos componentes, garantindo que o comportamento esperado ocorra nos momentos certos.

---

# Resumo:

## Life Cycle Hooks

```bash
1. ngOnInit()
```

```bash
2. ngOnChanges()
```

```bash
3. ngDoCheck()
```

## Eventos de Check

```bash
3.1 ngAfterContentInit()
```

```bash
3.2 ngAfterContentChecked()
```

```bash
3.3 ngAfterViewInit()
```

```bash
3.4 ngAfterViewChecked()
```

## Evento ao Destruir

```bash
4. ngOnDestroy()
``` 