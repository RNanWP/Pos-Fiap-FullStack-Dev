# 🛠️ Desenvolvimento Backend com OutSystems

## 🌟 Navegação

### 🏠 Principal

- [Home](./../../../../Pos-Fiap-FullStack-Dev/)
- [Fase 1](./../../../Fase%201/)
- [Fase 2](./../../../Fase%202/)
- [Fase 3](./../../../Fase%203/)
- [Fase 4](./../../../Fase%204/)
- [Fase 5](./../../../Fase%205/)

---

## 📚 Introdução

A **OutSystems** é uma plataforma **fullstack**, permitindo o desenvolvimento completo de aplicações **frontend e backend** dentro do **Service Studio**. No entanto, uma boa prática de arquitetura recomenda **separar as responsabilidades**, sendo a **Arquitetura Canvas** um modelo amplamente utilizado para essa finalidade.

---

## 🎨 **Arquitetura Canvas**

- **Modelo arquitetural** para a correta separação de módulos e serviços reutilizáveis.
- **Baseado em SOA (Service-Oriented Architecture)**, promovendo isolamento de funcionalidades e redução de dependências.
- **Ideal para projetos grandes**, podendo suportar **mais de 20 aplicações críticas** e **200 módulos interdependentes**.

### 🚀 **Benefícios**

- Permite que cada aplicação **evolua independentemente**, sem afetar módulos altamente reutilizados.
- Facilita **manutenção e escalabilidade**, tornando o desenvolvimento mais eficiente e de menor custo.

---

## 🔄 **Service Action vs. Server Action**

| **Aspecto**         | **Service Action** 🔗                                                       | **Server Action** ⚙️                                         |
| ------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Tipo de chamada** | Baseada em **REST**, utilizada para módulos diferentes.                     | Chamadas **locais e síncronas** dentro do mesmo módulo.      |
| **Escopo**          | Expõe serviços que podem ser usados por **outros módulos**.                 | A lógica encapsulada **pertence ao módulo onde foi criada**. |
| **Reusabilidade**   | Projetada para **integração entre módulos** e compartilhamento de serviços. | Utilizada para **organizar lógica interna** do módulo.       |

---

## 📡 **APIs no OutSystems**

Uma **API (Application Programming Interface)** permite a **comunicação entre sistemas**, sem que seja necessário conhecer a implementação interna do sistema conectado.

### 🔄 **Protocolos de API**

#### 1️⃣ **REST (Representational State Transfer)**

- **Popular** entre APIs modernas.
- **Cliente/Servidor**, sem estado.
- **Armazena dados em cache** para melhor desempenho.

#### 2️⃣ **SOAP (Simple Object Access Protocol)**

- **Extensível** e independente de estilo de programação.
- Pode operar por **diferentes protocolos de comunicação**.

### 🔗 **Métodos HTTP em APIs**

- **GET** → Consultar dados.
- **POST** → Enviar dados.
- **PUT** → Atualizar dados.
- **DELETE** → Excluir dados.

No OutSystems, **APIs REST e SOAP podem ser consumidas e expostas** sem necessidade de codificação manual, facilitando a **integração visual**.

---

## 🏗️ **O Que Aprendemos**

Nesta aula, exploramos:

1. **Camada backend** e sua separação dentro da plataforma OutSystems.
2. **Como expor APIs para integração** com outras aplicações.
3. **Práticas arquiteturais eficientes**, como a **Arquitetura Canvas**.

---

## 🔗 **Referências**

- [OutSystems - Architecture Canvas](https://success.outsystems.com/documentation/best_practices/architecture/designing_the_architecture_of_your_outsystems_applications/the_architecture_canvas/)
- [RESTful API - O Que É REST](https://restfulapi.net/)
- [Documentação de APIs com Swagger](https://www2.decom.ufop.br/terralab/documentando-sua-api-rest-com-swagger/)

---
