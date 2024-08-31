<p align="center">
  <img src="../assets/angular.png">
</p>

# Guards no Angular 🅰️

Este repositório contém um exemplo de implementação de Guards no Angular, uma funcionalidade usada para controlar o acesso a rotas com base em certas condições.

## O que são Guards?

Guards são serviços em Angular que determinam se uma rota pode ou não ser ativada ou desativada. Eles são úteis para proteger rotas, verificando condições como autenticação do usuário, permissões, ou qualquer outra lógica que você precise implementar antes de permitir o acesso a uma rota.

## Tipos de Guards

O Angular oferece quatro tipos principais de Guards:

- **`CanActivate`**: Controla se uma rota pode ser ativada.
- **`CanActivateChild`**: Controla se as rotas filhas podem ser ativadas.
- **`CanDeactivate`**: Controla se o usuário pode sair da rota atual.
- **`Resolve`**: Busca dados antes que a rota seja ativada.
- **`CanLoad`**: Controla se os módulos podem ser carregados de forma preguiçosa.

## Como criar um Guard

Para criar um Guard em Angular, use o seguinte comando:

```bash
ng generate guard nome-do-guard
```

Esse comando criará um serviço com uma interface que você pode implementar para definir a lógica do Guard.

## Exemplo de implementação de um Guard

Aqui está um exemplo de um `Guard` que verifica se o usuário está autenticado antes de acessar uma rota:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

Neste exemplo, o `AuthGuard` usa um serviço de autenticação (`AuthService`) para verificar se o usuário está logado. Se não estiver, o Guard redireciona o usuário para a página de login.

## Como usar Guards nas rotas

Para aplicar um Guard a uma rota, basta adicioná-lo à configuração da rota no módulo de roteamento:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

```

Neste exemplo, a rota `HomeComponent` só será ativada se o `AuthGuard` retornar true.

## Eventos Relacionados aos Guards

Além dos Guards, o Angular emite eventos específicos durante o ciclo de vida de navegação das rotas. Dois eventos importantes relacionados à verificação dos Guards são `GuardsCheckStart` e `GuardsCheckEnd`.

### `GuardsCheckStart`

- **Descrição**: Este evento é disparado quando o roteador começa a verificar os Guards antes de ativar uma rota.
- **Quando ocorre**: Ocorre após o evento `RoutesRecognized`, que é quando o roteador reconhece as rotas e decide qual caminho seguir, mas antes de qualquer Guard ser executado.
- **Propósito**: Pode ser usado para monitorar ou interceptar o início do processo de verificação dos Guards, útil para depuração.

### `GuardsCheckEnd`

- **Descrição**: Este evento é disparado após todos os Guards terem sido verificados, indicando que o processo de checagem dos Guards foi concluído.
- **Quando ocorre**: Ocorre após todos os Guards (CanActivate, CanActivateChild, CanDeactivate, CanLoad) terem sido executados e o roteador ter decidido se pode ou não ativar a rota.
- **Propósito**: Usado para monitorar o fim do processo de verificação dos Guards, pode ser útil para iniciar alguma ação após a verificação.

### Exemplo de Uso:

Você pode ouvir esses eventos no seu componente principal (`AppComponent`, por exemplo) da seguinte forma:

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, GuardsCheckStart, GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof GuardsCheckStart) {
        console.log('GuardsCheckStart:', event);
      }

      if (event instanceof GuardsCheckEnd) {
        console.log('GuardsCheckEnd:', event);
      }
    });
  }
}
```

## Conclusão
Guards são uma poderosa ferramenta no Angular para proteger rotas e garantir que certas condições sejam atendidas antes que os usuários acessem determinadas partes da aplicação. Este repositório fornece uma base para implementar Guards em suas próprias aplicações.

## Referências

* [Route Guards in Angular - Medium](https://medium.com/@hish.abdelshafouk/route-guards-in-angular-c9da0d815ef4)
* [Route Guards in Angular - Medium](https://raghuvardhankaranam.medium.com/route-guards-in-angular-c2c01fe6167b)
* [O que é Route Guards Angular](https://vidafullstack.com.br/angular/o-que-e-route-guards-angular/)
* [Como proteger suas rotas - Angular Guard](https://consolelog.com.br/como-proteger-rotas-angular-com-guard/)
* [Angular Docs - GuardsCheckEnd](https://v17.angular.io/api/router/GuardsCheckEnd)
* [Angular Docs - GuardsCheckStart](https://v17.angular.io/api/router/GuardsCheckStart)
