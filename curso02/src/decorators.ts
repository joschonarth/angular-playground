// Decorators

function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario {}

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version });
    };
}

// @apiVersion("1.10")
// class Api {}


// Attribute Decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor doq que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api {
    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// const api = new Api();
// console.log(api.__version);

const api = new Api("usuarios");
console.log(api.name);
