<p align="center">
  <img src="../assets/angular.png">
</p>

# Rotas no Angular 🅰️

Este documento aborda a configuração e uso de rotas no Angular, permitindo a navegação entre diferentes partes da sua aplicação de forma dinâmica e eficiente.

## Índice

1. [Introdução às Rotas](#introdução-às-rotas)
2. [Configuração Básica de Rotas](#configuração-básica-de-rotas)
3. [RouterLink e RouterLinkActive](#routerlink-e-routerlinkactive)
4. [Roteamento com Parâmetros](#roteamento-com-parâmetros)
5. [Acessando Parâmetros de Rota no Componente](#acessando-parâmetros-de-rota-no-componente)
6. [Query Params](#query-params)
7. [Rotas Filhas (Nested Routes)](#rotas-filhas-nested-routes)
8. [Lazy Loading (Carregamento Sob Demanda)](#lazy-loading-carregamento-sob-demanda)
9. [Protegendo Rotas com Guards](#protegendo-rotas-com-guards)
10. [Redirecionamentos e Rotas Coringa](#redirecionamentos-e-rotas-coringa)

## Introdução às Rotas

No Angular, as rotas permitem que você navegue entre diferentes componentes da aplicação, sem recarregar a página. As rotas são definidas em um módulo de roteamento, que especifica os caminhos de URL e os componentes correspondentes a esses caminhos.

## Configuração Básica de Rotas

**1. Importe os módulos de roteamento no seu `AppModule`:**

No arquivo `app.module.ts`, importe `RouterModule` e configure o módulo de roteamento básico.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**2. Defina suas rotas:**

No exemplo acima, `routes` é uma lista de objetos que mapeiam caminhos de URL a componentes. O caminho '' (vazio) representa a rota raiz, e `about` é o caminho para a página "Sobre".

**3. Utilize o `router-outlet` no seu template principal:**

O `router-outlet` é uma diretiva que atua como um ponto de ancoragem onde o conteúdo do componente correspondente à rota será exibido.

```typescript
<!-- app.component.html -->
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>
```

## RouterLink e RouterLinkActive

**RouterLink**: O `RouterLink` é uma diretiva que facilita a navegação dentro da aplicação Angular, associando uma rota a um elemento HTML, como um link ou botão.

```typescript
<a routerLink="/about">About</a>
```

**RouterLinkActive**: O `RouterLinkActive` é uma diretiva que aplica automaticamente classes CSS ao link quando a rota correspondente está ativa.

```typescript
<a routerLink="/about" routerLinkActive="active-link">About</a>
```

**RouterLinkOptions**: Você pode configurar opções adicionais, como desabilitar o scroll ao topo, com `routerLinkOptions`.

```typescript
<a [routerLink]="['/about']" [routerLinkOptions]="{ skipLocationChange: true }">About</a>
```

## Roteamento com Parâmetros

Você pode definir rotas que aceitam parâmetros dinâmicos, permitindo que diferentes dados sejam passados para o componente de destino.

```typescript
const routes: Routes = [
  { path: 'user/:id', component: UserComponent },
];
```

No exemplo acima, `:id` é um parâmetro que pode ser acessado dentro do `UserComponent`.

## Acessando Parâmetros de Rota no Componente
No componente, você pode acessar os parâmetros usando o `ActivatedRoute`:

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}

```

## Query Params

**Query Params** permitem passar parâmetros adicionais na URL sem afetar o caminho da rota.

```typescript
const routes: Routes = [
  { path: 'search', component: SearchComponent }
];
```

No componente, você pode acessar os Query Params assim:

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['term'];
    });
  }
}
```

Para navegar com Query Params:

```typescript
<a [routerLink]="['/search']" [queryParams]="{ term: 'angular' }">Search</a>
```

## Rotas Filhas (Nested Routes)

Rotas filhas permitem aninhar rotas dentro de outras rotas, o que é útil para criar layouts complexos.

```typescript
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'stats', component: StatsComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  }
];

```

No exemplo acima, as rotas `stats` e `reports` são rotas filhas da rota `dashboard`.

## Lazy Loading (Carregamento Sob Demanda)

O Lazy Loading carrega módulos somente quando eles são necessários, otimizando o desempenho da aplicação.

**1. Crie um módulo para Lazy Loading:**

```bash
ng g m feature --routing
```

**2. Configure a rota para carregar o módulo sob demanda:**

```typescript
const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  }
];
```

## Protegendo Rotas com Guards

Os `Guards` permitem que você controle o acesso a determinadas rotas com base em condições específicas, como autenticação.

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Lógica de autenticação aqui
    return true;
  }
}
```

Para usar o Guard, adicione-o à sua rota:

```typescript
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

```

## Redirecionamentos e Rotas Coringa

Você pode configurar redirecionamentos e rotas coringa para tratar URLs inválidas.

* **Redirecionar uma rota:**

```typescript
{ path: '', redirectTo: '/home', pathMatch: 'full' }
```

* **Rota coringa (para URLs não correspondentes):**

```typescript
{ path: '**', component: PageNotFoundComponent }
```

---

Com estas práticas, você pode configurar e gerenciar eficientemente o roteamento em sua aplicação Angular, proporcionando uma navegação fluida e uma experiência de usuário melhorada.