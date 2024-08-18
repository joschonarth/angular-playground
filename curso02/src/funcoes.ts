// Funções
function addNumber(x: number, y:number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

let soma: number = addNumber(3, 7);
console.log(soma);

console.log(addToHello("João"));
console.log(callToPhone(123456789));

// Funções Assíncronas
async function getDataBase(id: number): Promise<string> {
    return "joao";
}