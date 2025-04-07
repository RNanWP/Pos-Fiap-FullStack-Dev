class Animal2 {
   #especie: string; // o # indica que o atributo é privado

   constructor(especie: string) {
       this.#especie = especie;
   }

   getEspecie(): string {
       return this.#especie;
   }

   fazerSom() {
       console.log("O animal faz um som");
   }
};

class Cachorro2 extends Animal2 {
   fazerSom() {
       console.log("Au Au!");
   };
};

class Macaco2 extends Animal2 {
   fazerSom() {
       console.log("U Ah Ah!");
   };
};

let meuCatioro2: Animal2 = new Cachorro2('Cachorro2');
console.log(meuCatioro2.getEspecie());