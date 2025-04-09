# Domain Driven Design (DDD)

## 🌟 Navegação

### 🏠 Principal
- [Home](./../../../Pos-Fiap-FullStack-Dev/
) | 
[Fase 2](./../Fase%202/) | [Fase 3](./../Fase%203/) | [Fase 4](./../Fase%204/) | [Fase 5](./../Fase%205/)
- [TypeScript](./../1-TypeScript/)
- [Domain Driven Design](./../2-Domain%20Driven%20Design%20(DDD)/)

---

# Implementando Arquitetura Lógica

## 📜 Introdução
No **Domain-Driven Design (DDD)**, após explorar o Design Estratégico focado no **"por quê"** e **"o que"**, avançamos para o **Design Tático**. Este estágio responde ao **"como"**, abordando conceitos como **Arquitetura** e os **Blocos de Construção** do DDD. É o momento de definir:
- As tecnologias a serem utilizadas: Bancos relacionais ou NoSQL? Microsserviços ou Barramento de Serviços?
- Como elas interagem para formar a base do sistema.

## 📐 Arquitetura em DDD
### Estrutura de Camadas
O DDD organiza sua arquitetura em quatro camadas principais:

1️⃣ **Camada de Interface de Usuário**
- Responsável pela interação com o usuário e outros sistemas (GUI, CLI, APIs).
- Atua como a face do sistema.

2️⃣ **Camada de Aplicação**
- Media a comunicação entre a Interface de Usuário e o Domínio.
- **Não contém lógica de negócios**; apenas organiza tarefas e monitora alterações.
- Exemplo: Disparar a rotina para contabilizar faltas dos alunos.

3️⃣ **Camada de Domínio**
- O **"coração do software"**, onde estão as regras de negócios e a lógica essencial.
- Executa mudanças de estado e cálculos de negócios.
- Exemplo: Cálculo de notas dos alunos, considerando entregas atrasadas.

4️⃣ **Camada de Infraestrutura**
- Suporte técnico para persistência de dados, mensageria e interação entre camadas.
- É o alicerce das camadas superiores.

## 🧩 Blocos de Construção do DDD
### 🔹 Objetos de Valor (Value Objects)
- **Imutáveis e únicos**.
- Descrevem algo no domínio e são comparados por igualdade de valores.
- Exemplo: Alterar "Rua 3" para "Rua 5" cria um novo objeto.

### 🔹 Entidades (Entities)
- **Possuem identificadores únicos (ID)** e são mutáveis.
- Podem ser alteradas após criadas, sem a necessidade de validação de unicidade.

### 🔹 Agregados (Aggregates)
- Grupo de entidades e objetos de valor com consistência forçada.
- Apenas a lógica interna do agregado pode alterar seu estado.
- Entidades externas podem solicitar mudanças através de **comandos**, mas não alterá-lo diretamente.

### 🔹 Serviços de Domínio (Domain Services)
- Trabalham com entidades e agregados para cálculos e execução de rotinas.
- São objetos separados e focados em lógica que transcende o escopo de um único agregado.
