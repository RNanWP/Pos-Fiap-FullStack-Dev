# Implementando Arquitetura Logica

## 🌟 Navegação

### 🏠 Principal
- [Home](./../../../../Pos-Fiap-FullStack-Dev/) | 
[Fase 2](./../Fase%202/) | [Fase 3](./../Fase%203/) | [Fase 4](./../Fase%204/) | [Fase 5](./../Fase%205/)
- [TypeScript](./../../1-TypeScript/)
- [Domain Driven Design](./../../2-Domain%20Driven%20Design%20(DDD)/)
---

# Implementando Arquitetura Lógica

## 🛠️ Design Tático

Após explorarmos o Design Estratégico, focado no **"por quê"** e **"o que"** fazer, avançamos para o **Design Tático**, onde analisamos **"como"** implementar DDD. Esse estágio aborda conceitos fundamentais de implementação, incluindo **Arquitetura** e **Blocos de Construção** do DDD, além de decisões como:
- Bancos relacionais ou NoSQL?
- Microsserviços ou Barramento de Serviços?

## 📐 Arquitetura em DDD

O DDD organiza a arquitetura em quatro camadas principais:

### Camada de Interface de Usuário
Responsável pela interação com o usuário ou outros sistemas. Esta camada inclui:
- Interfaces gráficas (GUI),
- Interfaces de linha de comando (CLI),
- APIs para integração com outros sistemas.

### Camada de Aplicação
Media a comunicação entre a Interface de Usuário e a Camada de Domínio. Algumas características dessa camada incluem:
- **Não contém lógica de negócios**,
- Organiza tarefas do sistema,
- Monitora e reporta mudanças, servindo como gatilho para atualizações em lote ou em tempo real.

### Camada de Domínio
Definida como **“O coração do software”** (Eric Evans, 2003), contém:
- Regras de negócios,
- Lógica de negócio,
- Criação de registros e mudanças de estado.

Exemplo: Cálculo de notas dos alunos, considerando entregas atrasadas e descontos.

### Camada de Infraestrutura
Oferece suporte técnico às camadas superiores com funcionalidades como:
- Persistência de dados,
- Mensageria,
- Padrões de interação entre as camadas.

---

## 🧩 Blocos de Construção do DDD

### 🔹 Objetos de Valor (Value Objects)
Objetos imutáveis e únicos, identificados exclusivamente por seus valores. Características principais:
- **Descrevem algo no domínio**,
- São substituíveis e comparáveis por igualdade de valores,
- Mantêm a unicidade na lista de objetos.

Exemplo: Alterar "Rua 3" para "Rua 5" cria um novo objeto ao invés de modificar o existente.

### 🔹 Entidades (Entities)
Possuem identificadores únicos e são mutáveis. Diferenças dos Objetos de Valor:
- **Identificação única (ID)**,
- Permitem alterações nos atributos,
- Não exigem validação de unicidade ao inserir novos objetos.

### 🔹 Agregados (Aggregates)
Agrupam entidades e objetos de valor com regras específicas:
- Garantem consistência e integridade de dados,
- Apenas a lógica interna pode alterar seu estado,
- Entidades externas podem solicitar mudanças através de **comandos**.

### 🔹 Serviços de Domínio (Domain Services)
São objetos separados que trabalham com entidades e agregados para realizar cálculos, execuções de rotinas e outras operações complexas.