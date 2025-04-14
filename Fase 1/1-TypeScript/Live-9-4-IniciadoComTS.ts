//       Iniciando com TypeScrip
// Uma introdução abrangente à linguagem tipada para JavaScript

//       AGENDA
// 1. O que é TypeScript?
// 2. História e Surgimento
// 3. Por que usar TypeScript?
// 4. Instalação e Configuração
// 5. Fundamentos e Sintaxe Básica
// 6. Sistema de Tipos
// 7. Interfaces e Types
// 8. Módulos e Namespaces
// 9. Ferramentas e Ecossistema
// 10. Boas Práticas e Dicas
// 11. Prática e Exemplos

//       O que é TypeScript?
// Um superset do JavaScript
// Adiciona tipagem estática opcional
// Desenvolvido e mantido pela Microsoft
// Compila para JavaScript puro
// Compatível com todos os ambientes JavaScript
// Código aberto e gratuito

//       História e Surgimento
// Outubro de 2012: Anunciado por Anders Hejlsberg (também criador do C#)
// Problema: Escalabilidade do JavaScript para grandes aplicações
// Versão 1.0: Lançada em abril de 2014
// TypeScript 2.0 (2016): Introduziu muitos recursos importantes (union types, literal types)
// TypeScript 3.0 (2018): Melhorias para project references e tuples
// TypeScript 4.0 (2020): Variadic tuple types e labeled tuple elements
// TypeScript 5.0 (2023): Decorators e melhorias de performance

//       Por que usar TypeScript?
// Benefícios
// Detecção de erros em tempo de compilação
// Melhor tooling e IntelliSense (autocompletar, dicas, documentação inline)
// Refatoração mais segura
// Autodocumentação do código
// Maior produtividade para equipes grandes
// Maior confiabilidade do código
// Estatísticas
// Adotado por 78% dos desenvolvedores JS (2023)
// Redução de 15-40% em bugs relacionados a tipos

//       Por que usar TypeScript? (Continuação)
// Código JavaScript x TypeScript

function add(a: number, b: number): number {
  return a + b;
}
// Erro de compilação: Argument of type '"5"' is not
// assignable to parameter of type 'number'
add("5", 10);

//       Instalação e Configuração
//    Instalação Global
// npm install -g typescript

//    Instalação em Projeto
// npm init -y
// npm install typescript --save-dev

//    Verificando a Instalação
// tsc --version

//    Iniciando um Projeto TypeScript
// tsc --init

//    Isso gera o arquivo tsconfig.json com configurações padrão.
//    Arquivo tsconfig.json
// {
//  "compilerOptions": {
//  "target": "es2016",
//  "module": "commonjs",
//  "strict": true,
//  "esModuleInterop": true,
//  "skipLibCheck": true,
//  "forceConsistentCasingInFileNames": true,
//  "outDir": "./dist"
//  },
//  "include": ["src/**/*"],
//  "exclude": ["node_modules"]
// }

// target: Versão do ECMAScript para o JavaScript gerado
// module: Sistema de módulos para o código gerado
// strict: Ativa verificações de tipo rigorosas
// outDir: Diretório de saída para os arquivos JS compilados

//       Fundamentos e Sintaxe Básica
//    Primeiro Exemplo
// Arquivo: hello.ts
function greet(name: string): string {
  return `Olá, ${name}!`;
}
const message = greet("Mundo");
console.log(message);

//       Sistema de Tipos: Tipos Básicos
// Tipos primitivos
let idade: number = 30;
let nome: string = "João";
let ativo: boolean = true;
// Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: Array<string> = ["Ana", "Pedro", "Maria"];
// Tuple
let pessoa: [string, number] = ["Pedro", 25];
// Enum
enum DiaDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo,
}
let dia: DiaDaSemana = DiaDaSemana.Segunda;

//       Sistema de Tipos: Tipos Especiais
// Any - evite usar quando possível
let qualquerCoisa: any = 4;
qualquerCoisa = "string agora";
qualquerCoisa = false;
// Unknown - similar ao any, mas mais seguro
let valorDesconhecido: unknown = 10;
// precisa verificar o tipo antes de usar
if (typeof valorDesconhecido === "number") {
  const soma = valorDesconhecido + 5;
}
// Void - ausência de valor de retorno
function log(message: string): void {
  console.log(message);
}
// Null e Undefined
let nulo: null = null;
let indefinido: undefined = undefined;
// Never - nunca retorna
function erro(mensagem: string): never {
  throw new Error(mensagem);
}

//       Sistema de Tipos: Union e Intersection
//    Union Types (União)
// Pode ser string OU number
let id: string | number;
id = 123; // válido
id = "abc"; // válido
id = true; // erro!

//    Intersection Types (Interseção)
type Pessoa = {
  nome: string;
  idade: number;
};
type Funcionario = {
  cargo: string;
  salario: number;
};
// Combina ambos os tipos
type FuncionarioCompleto = Pessoa & Funcionario;
const joao: FuncionarioCompleto = {
  nome: "João Silva",
  idade: 28,
  cargo: "Desenvolvedor",
  salario: 5000,
};

//       Sistema de Tipos: Type Assertions
// Às vezes você sabe mais que o TypeScript
let codigo: any = "123";
// Formas de fazer assertions:
// Forma 1 (com "as")
let numeroComoString1 = codigo as string;
// Forma 2 (com sintaxe de ângulo) - menos comum, não funciona em JSX
let numeroComoString2 = <string>codigo;

//    Non-null Assertion
// O operador ! indica que o valor não será null/undefined
function getFirstElement(arr?: string[]) {
  // TypeScript normalmente reclamaria, mas ! diz "confie em mim"
  return arr![0];
}

//       Interfaces
//    Interfaces definem contratos em seu código
interface Usuario {
  nome: string;
  email: string;
  idade?: number; // Propriedade opcional
  readonly id: number; // Propriedade somente leitura
}
function criarUsuario(usuario: Usuario): void {
  console.log(`Usuário ${usuario.nome} criado com sucesso!`);
  // usuario.id = 2; // Erro! id é somente leitura
}
const novoUsuario: Usuario = {
  nome: "Maria",
  email: "maria@email.com",
  id: 1,
};
criarUsuario(novoUsuario);

//       Interfaces: Extensão
//    Estendendo Interfaces
interface Pessoa {
  nome: string;
  idade: number;
}
interface Estudante extends Pessoa {
  matricula: string;
  curso: string;
}
const estudante: Estudante = {
  nome: "Ana",
  idade: 20,
  matricula: "2023001",
  curso: "Computação",
};

//       Type Aliases vs Interfaces
// Type Alias
type Ponto = {
  x: number;
  y: number;
};
// Interface
interface Ponto2D {
  x: number;
  y: number;
}

//    Principais Diferenças
// Extensão:
// Interfaces podem ser estendidas com extends
// Types podem usar interseção (&)
// Declaração Múltipla:
// Interfaces com mesmo nome são mescladas automaticamente
// Type aliases não podem ser redeclarados
// Casos de Uso:
// Interfaces: quando precisa-se definir APIs públicas
// Types: para unions, intersections, e tipos mais complexos

//       Genéricos (Generics)
//    Permitem criar componentes reutilizáveis com vários tipos
// Função genérica
function identidade<T>(arg: T): T {
  return arg;
}
const num = identidade<number>(42); // retorna number
const str = identidade<string>("texto"); // retorna string
// Arrays genéricos
function primeiroElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}
// Interface genérica
interface Caixa<T> {
  conteudo: T;
}
const caixaDeNumero: Caixa<number> = { conteudo: 42 };
const caixaDeString: Caixa<string> = { conteudo: "texto" };

//       Genéricos: Restrições
// Usando extends para restringir tipos
interface ComNome {
  nome: string;
}
function imprimirNome<T extends ComNome>(obj: T): void {
  console.log(obj.nome);
}
imprimirNome({ nome: "Alice", idade: 30 }); // OK
// imprimirNome({ idade: 30 }); // Erro: falta a propriedade 'nome'
// Tipos genéricos com múltiplas restrições
function juntar<T extends string | number, U extends string | number>(
  a: T,
  b: U
): string {
  return a.toString() + b.toString();
}
const resultado = juntar("Olá, ", 123); // "Olá, 123"

//       Módulos em TypeScript
//    Exportando
// math.ts
export function soma(x: number, y: number): number {
  return x + y;
}
export function subtracao(x: number, y: number): number {
  return x - y;
}
export const PI = 3.14159;
// Exportação padrão
export default function multiplicar(x: number, y: number): number {
  return x * y;
}

//    Importando
// app.ts
import multiplicar, { soma, PI } from "./math";
import * as MathUtils from "./math";
console.log(soma(5, 3)); // 8
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.subtracao(10, 4)); // 6
console.log(multiplicar(2, 3)); // 6

//       Namespaces
// Útil para organizar código em contextos específicos
namespace Validacao {
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  export function validarEmail(email: string): boolean {
    // Verificação simplificada de email
    return email.includes("@") && email.includes(".");
  }

  export function validarCEP(cep: string): boolean {
    // Verificação simplificada de CEP
    return /^\d{5}-\d{3}$/.test(cep);
  }
}
// Usando o namespace
if (Validacao.validarEmail("user@example.com")) {
  console.log("Email válido");
}
if (Validacao.validarCEP("12345-678")) {
  console.log("CEP válido");
}

//       Decorators (Experimental)
// Requer experimentalDecorators no tsconfig.json
function logger(target: any) {
  console.log(`Classe criada: ${target.name}`);
}
// Decorador de método
function logar(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Chamando método ${propertyKey} com args:
  ${JSON.stringify(args)}`);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`Resultado: ${resultado}`);
    return resultado;
  };
  return descriptor;
}
// Exemplo de uso
@logger
class Exemplo {
  @logar
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}
// tsconfig.json precisa ter:
// "experimentalDecorators": true

//       Utilitários de Tipos
// Partial - torna todas as propriedades opcionais
interface Todo {
  titulo: string;
  descricao: string;
  concluido: boolean;
}
function atualizarTodo(todo: Todo, campos: Partial<Todo>): Todo {
  return { ...todo, ...campos };
}
// Required - torna todas as propriedades obrigatórias
interface PropsOpcionais {
  a?: number;
  b?: string;
}
const props: Required<PropsOpcionais> = { a: 5, b: "obrigatório" };
// Readonly - torna todas as propriedades somente leitura
const todoFixo: Readonly<Todo> = {
  titulo: "Estudar",
  descricao: "TypeScript",
  concluido: false,
};
// todoFixo.concluido = true; // Erro!

//       Mais Utilitários de Tipos
// Pick - seleciona um subconjunto de propriedades
type TodoPreview = Pick<Todo, "titulo" | "concluido">;
// Omit - omite um conjunto de propriedades
type TodoSemDescricao = Omit<Todo, "descricao">;
// Record - cria um tipo com um conjunto de propriedades
type PageInfo = {
  titulo: string;
  url: string;
};
type Pages = Record<string, PageInfo>;
const site: Pages = {
  home: { titulo: "Home", url: "/" },
  sobre: { titulo: "Sobre", url: "/sobre" },
};

//       Type Guards
// Verificações de tipo em runtime
function isPessoa(obj: any): obj is { nome: string, idade: number } {
   return obj &&
   typeof obj === "object" &&
   "nome" in obj &&
   "idade" in obj;
  }
  function processarDado(dado: unknown) {
   if (isPessoa(dado)) {
   // TypeScript sabe que dado é do tipo { nome: string, idade: number
  }
   console.log(dado.nome, dado.idade);
   } else {
   console.log("Não é uma pessoa");
   }
  }
  // Usando typeof
  function processarValor(valor: string | number) {
   if (typeof valor === "string") {
   // TypeScript sabe que valor é uma string
   console.log(valor.toUpperCase());
   } else {
   // TypeScript sabe que valor é um number
   console.log(valor.toFixed(2));
   }
}

//       Ferramentas e Ecossistema
//    IDEs e Editores
// VS Code: Suporte nativo ao TypeScript
// WebStorm: Excelente integração com TypeScript
// Vim/Emacs: Plugins disponíveis

//    Frameworks e Bibliotecas
// Angular: Escrito em TypeScript
// React: Suporte via @types/react
// Vue.js: Suporte oficial para TypeScript
// Express: Suporte via @types/express
// NestJS: Framework Node.js baseado em TypeScript

//    Linters
// ESLint: Com o plugin @typescript-eslint
// TSLint: (Descontinuado, migre para ESLint)

//       Ferramentas e Ecossistema
//    Testing
// Jest: Através de ts-jest
// Mocha/Chai: Com ts-node

//    Bundlers
// Webpack: Com ts-loader
// Rollup: Com @rollup/plugin-typescript
// esbuild: Suporte nativo para TypeScript
// Vite: Suporte TypeScript out-of-the-box

//    Utilitários
// ts-node: Execute TypeScript diretamente
// tsc-watch: Compilação com hot reload
// tsconfig-paths: Resolução de caminhos personalizada
// typescript-eslint: Regras de linting específicas

//       Boas Práticas em TypeScript
//    1. Habilite o modo strict
// { "compilerOptions": { "strict": true } }
//    2. Evite any sempre que possível
// Use unknown se precisar de flexibilidade
//    3. Prefira interfaces para API pública
// São mais fáceis de estender posteriormente
//    4. Use aliases de tipo para unions/intersections
//    5. Não ignore erros de compilação
// Evite usar as any ou // @ts-ignore
//    6. Use tipagem explícita para API pública, implícita para variáveis locais
//    7. Separe lógica de negócios da tipagem
// Arquivos de definição de tipo (.d.ts) podem ajudar
//    8. Documente suas interfaces com JSDoc

//       Boas Práticas em TypeScript (Continuação)
//    9. Use enums apenas quando necessário
// Às vezes, union types são mais adequados
//    10. Aproveite a inferência de tipos

// Não faça:
// const valor: number = 5;
// Prefira:
// const valor = 5; // TypeScript infere como number
//    11. Organize seu código por funcionalidade, não por tipo
// Módulos coesos são melhores que módulos separados por tipo
//    12. Não dependa exclusivamente do TypeScript para validação de dados externos
// Use bibliotecas como Zod, io-ts ou class-validator para runtime validation
//    13. Teste seus tipos com ferramentas como dtslint
//    14. Use path aliases para importações mais limpas
////
// {
//  "compilerOptions": {
//  "baseUrl": ".",
//  "paths": { "@app/*": ["src/*"] }
//  }
// }
////

//       Perguntas Comuns
//    1. TypeScript adiciona overhead em runtime?
// Não, os tipos são removidos na compilação
//    2. TypeScript é compatível com todas as bibliotecas JavaScript?
// Sim, graças à comunidade DefinitelyTyped (@types/*)
//    3. É possível adotar TypeScript gradualmente?
// Sim! Configure allowJs: true no tsconfig
//    4. TypeScript substitui testes unitários?
// Não, serve a propósitos diferentes
//    5. TypeScript atrasa o desenvolvimento?
// Há uma curva de aprendizado inicial, mas economiza tempo em projetos maiores
// 6. Como migrar um projeto JS existente para TS?
// Comece com o básico e refatore incrementalmente

//       Recursos para Aprender Mais
// Documentação Oficial: typescriptlang.org
// TypeScript Playground: typescriptlang.org/play
// Livros:
// "Programming TypeScript" - Boris Cherny
// "Effective TypeScript" - Dan Vanderkam
// Cursos Online:
// TypeScript no Codecademy, Pluralsight, Udemy, Alura
// GitHub: microsoft/TypeScript
// Blogs:
// TypeScript Weekly Newsletter
// Blog oficial da Microsoft TypeScript

//       Exemplos Práticos
// Os exemplos práticos serão demonstrados após esta apresentação
// Um script com diversos exemplos didáticos foi preparado
// Vamos aplicar os conceitos aprendidos em código real
// Teremos a oportunidade de ver o TypeScript em ação

//       Conclusão
// TypeScript é uma ferramenta poderosa para desenvolvimento JavaScript
// Adiciona segurança de tipos sem sacrificar a flexibilidade do JS
// Melhora a experiência de desenvolvimento com melhor tooling
// É uma habilidade valiosa no mercado de trabalho atual
// A comunidade e o ecossistema continuam em crescimento