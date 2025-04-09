// Objeto de valor, porém com as Classes Pessoas gerindo todos

using System;

nameespace ExemploObjetoValor
{
   public class Pessoa
   {
      public string Nome {get;}
      public string Sobrenome {get;}
      public string Endereco {get;}
      public string Cidade {get;}
      public string Estado {get;}
      public string Cep {get;}
      public string Pais {get;}

      public Pessoa (string nome, string sobrenome, string endereco, string cidade, string cep, string Pais){
         Nome = nome;
         Sobrenome = sobrenome;
         Endereco = endereco;
         Cidade = cidade;
         Estado = estado;
         Cep = cep;
         Pais = pais;
      }

      public override bool Equals(objetct obj)
      {
         if(obj == null || GetType() != obj.GetType())
            return false;

         Pessoa outraPessoa = (Pessoa)obj;
         return Nome == outraPessoa.Nome && Sobrenome == outraPessoa.Sobrenome &&
         Endereço == outraPessoa.Endereço && Cidade == outraPessoa.Cidade &&
         Estado == outraPessoa.Estado && CEP == outraPessoa.CEP && Pais == outraPessoa.Pais;
      }

      public override int GetHashCode()
      {
         return GetHashCode.Combine(Nome, Sobrenome, Endereco, Cidade, Estado, CEP, Pais);
      }

      public override string ToString()
      {
         return $"Nome: {Nome} {Sobrenome}, Endereço: {Endereco}, Cidade: {Cidade}, Estado: {Estado}, CEP: {CEP}, Pais: {Pais}";
      }
    class Programa
    {
        static void Main(string[] args)
        {
            // Criar instâncias de Pessoa
            Pessoa pessoa1 = new Pessoa("João", "Silva", "Rua Principal, 123", "São Paulo", "SP", "01234-567", "Brasil");
            Pessoa pessoa2 = new Pessoa("Maria", "Souza", "Avenida Secundária, 456", "Rio de Janeiro", "RJ", "98765-432", "Brasil");
            Pessoa pessoa3 = new Pessoa("João", "Silva", "Rua Principal, 123", "São Paulo", "SP", "01234-567", "Brasil");
            Pessoa pessoa4 = new Pessoa("Carlos", "Ferreira", "Rua Nova, 789", "Porto", "PT", "54321", "Portugal");
            Pessoa pessoa4 = new Pessoa("Carlos", "Ferreira", "Rua Nova, 789", "Porto", "PT", "54321", "Portugal");

            // Imprimir detalhes da pessoa
            Console.WriteLine("Pessoa 1: " + pessoa1);
            Console.WriteLine("Pessoa 2: " + pessoa2);
            Console.WriteLine("Pessoa 3: " + pessoa3);
            Console.WriteLine("Pessoa 4: " + pessoa4);

            // Interludio
            Console.WriteLine("");
            Console.WriteLine("Realizando a comparação das Pessoas:");
            Console.WriteLine("");

            // Comparar instâncias de pessoa
            Console.WriteLine("Comparando pessoa1 e pessoa2: " + pessoa1.Equals(pessoa2));
            Console.WriteLine("Comparando pessoa1 e pessoa3: " + pessoa1.Equals(pessoa3));
            Console.WriteLine("Comparando pessoa1 e pessoa4: " + pessoa1.Equals(pessoa4));

        }
    }
}