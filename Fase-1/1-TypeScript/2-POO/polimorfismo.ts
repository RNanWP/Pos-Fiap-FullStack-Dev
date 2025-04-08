class Animal {
   fazerSom() {
       console.log("O animal faz um som");
   };
};

class Cachorro extends Animal {
   fazerSom() {
       console.log("Au Au!");
   };
};

class Macaco extends Animal {
   fazerSom() {
       console.log("U Ah Ah!");
   };
};

const meuCatioro: Animal = new Cachorro();
meuCatioro.fazerSom();