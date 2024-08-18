// Tipos primitivos:
let ligado: boolean = false;
let nome: string = "joao";
let idade: number = 20;
let altura: number = 1.9;

// Tipos especiais:
let nulo: null = null;
let indefinido: undefined = undefined;

// Tipos abrangentes:
let retorno:void
function executaQuery(): void {}
let retornoView:any = "qualquer coisa"

// Objeto - sem previsibilidade
let produto:object = {
    name: "joao",
    cidade: "sp",
    idade: 20,
};

// Objeto tipado - com previsibilidade
type Produtoloja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: Produtoloja = {
    nome: "Tênis",
    preco: 90.00,
    unidades: 2,
}

// Arrays
let dados: string[] = ["joao", "otavio", "schonarth"];
let dados2: Array<string> = ["joao", "otavio", "schonarth"];
let infos: (string | number)[] = ["joao", 20, "otavio"];

// Tuplas
let boleto:[string, number, number] = ["agua conta", 100, 123456789];

// Date
let aniversario:Date = new Date("2004-04-19 05:00");
console.log(aniversario.toString());