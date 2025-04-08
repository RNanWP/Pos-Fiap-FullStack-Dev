# Descoberta e Formação do Conhecimento

## 🌟 Navegação

### 🏠 Principal
- [Home](./../../../../Pos-Fiap-FullStack-Dev/) | 
[Fase 2](./../Fase%202/) | [Fase 3](./../Fase%203/) | [Fase 4](./../Fase%204/) | [Fase 5](./../Fase%205/)
- [TypeScript](./../1-TypeScript/)
- [Domain Driven Design](./2-Domain%20Driven%20Design%20(DDD)/)
----
## O que é?
Nossa escola tem várias áreas de "negócios", cada uma com suas particularidades e dialetos próprios. DDD é sobre entender o que é a demanda do negócio, aprender o que agrega valor.

---

### O desafio do negócio
Quando estamos falando sobre o desafio do negócio, estamos endereçando o que o negócio faz, quais são os seus processos e quais os desafios conhecidos.

O Domain Expert tem que falar algo que os desenvolvedores possam entender e vice e versa.

---

### A linguagem Ubíqua
É de extrema importância que tenhamos os termos claros para cada cenário e subdomínio. Dessa forma, tanto o negócio quanto o time de desenvolvimento "falam a mesma língua" e, posteriormente, esses termos podem e serão utilizados no desenho do sistema.
É importante que a linguagem seja consistente e detalhada

**Termos Ambíguos:** dentro de um subdomínio, podemos ter um mesmo termo com vários significados. Por exemplo: política. Esse termo pode significar uma lei regulatória ou uma regra interna da escola. Aqui podemos definir que o termo política será utilizado para os dois significados.


**Termos Sinônimos:** dentro de um termo que é utilizado para vários significados que possuem muito mais detalhes. Por exemplo, em TI utilizamos sempre o termo login para referenciar o ate de efetuar autenticação no sistema, ou para a conta do usuário. Sempre que possível, temos que quebrar eses termos e lhes dar definições únicas e específicas para evitar problemas futuros.

---

### Modelagem de Domínio
Essa documentação é essencial para que possamos conduzir as converas com o Domain Experts e extrair tudo que é necessário para entender o problema.

Ao falar de Realidade vs Desejo, será aplicado ao interarmos sobre o modelo, como o foco no que é importante, temos uma linguagem única (ubíqua) vai nos ajudar a criar um modelo mais efetivo e criar uma solução que reflete o que foi dito.

---

### Ferramentas
Um bom exemplo é montarmos uma Wiki que consolida os diversos recursos.

- Wiki para ser a central do projeto, consolidando todos os recursos.

- Seção na Wiki com a descrição do projeto.

- Seção na Wiki com o time do projeto. Devemos então criar diversas subpáginas para contemplar cada parte do projeto. Em outras palavras, uma página para cada subdomínio.

- Seção na Wiki para linguagem ubíqua.

- Seção na Wiki para os cenários que criamos, suas premissas e limitações.

- Link para um repositório do GitHub, com os códigos do projeto e sua documentação.

- Link para a Ferramenta de Gestão de Projeto.

---

### Contextos Delimitados
São limites criados para organizar soluções dentro de um sistema, baseados na análise de negócios e processos. Eles ajudam a identificar domínios e subdomínios, garantindo que cada parte do sistema seja bem definida e independente. A quantidade de recursos, tamanho e complexidade de cada contexto pode variar conforme o projeto, influenciando diretamente a estrutura de desenvolvimento, como o número de equipes necessárias. Contextos delimitados podem englobar desde soluções completas até áreas mais específicas do sistema.

**Contextos Delimitados** organizam sistemas em limites claros para facilitar o trabalho de equipes independentes. Cada time (como os mencionados no print: Marketing e Admissões) desenvolve sua própria linguagem ligada aos processos de negócio e à **linguagem ubíqua**. Isso reduz ambiguidades e otimiza a comunicação, com cada contexto delimitando termos, operações e propriedades únicos. Esse modelo melhora a eficiência ao permitir que equipes trabalhem em suas áreas específicas sem interferir nas outras.
