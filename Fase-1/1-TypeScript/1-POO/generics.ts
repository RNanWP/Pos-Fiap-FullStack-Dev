function primeiroElemento<T>(arr: T[]): T {
  return arr[0];
}

let numeros = primeiroElemento([1, 2, 3]);
let palavras = primeiroElemento(["ola", "mundo"]);

console.log(numeros);
console.log(palavras);

/////////////////////////////////////////////////////////////////////////

interface TemNome {
  nome: string;
}

class Pessoa implements TemNome {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class CaixaNome<T extends TemNome> {
  conteudo: T;

  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }
}

let pessoa = new Pessoa("Joao");
let caixa = new CaixaNome(pessoa);

console.log(caixa.conteudo.nome);
