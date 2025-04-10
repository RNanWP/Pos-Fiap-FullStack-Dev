# Event Storming

## 🌟 Navegação

### 🏠 Principal
- [Home](./../../../../Pos-Fiap-FullStack-Dev/
) | 
[Fase 2](./../Fase%202/) | [Fase 3](./../Fase%203/) | [Fase 4](./../Fase%204/) | [Fase 5](./../Fase%205/)
- [TypeScript](./../../1-TypeScript/)
- [Domain Driven Design](./../../2-Domain%20Driven%20Design%20(DDD)/)
---

## Descrição Geral
Este documento explora a estrutura de event storming, destacando como os eventos, comandos, políticas e modelos são integrados em uma linha do tempo. Ele detalha a criação de eventos pivotais através de ações e o papel dos sistemas externos, agregados e contextos delimitados na organização e modelagem.

---

## Estrutura Principal

### 1. Linha do Tempo e Comandos
- A linha do tempo organiza eventos gerados por ações específicas de atores ou regras do sistema.
- Comandos são ações descritas no imperativo, como:
  - **Criar atividade (Professor)**.
  - **Corrigir atividade (Professor)**.
  - **Realizar atividade (Aluno)**.
  - **Gravar nota (Professor)**.
- Comandos sem atores são realizados por regras de negócio.

### 2. Políticas
- Automação via regras do sistema dispara comandos que criam eventos.
- **Representação**: Políticas são conectadas a eventos que ativam comandos e podem ser condicionadas a critérios limitantes.
- **Visualização**: Utilizam papel roxo claro.

### 3. Modelos de Leitura
- Modelos são visões de dados (relatórios, telas, e-mails, notificações) consultadas antes de executar comandos.
- **Representação**: Papel verde claro, posicionado antes do comando na linha do tempo.

### 4. Sistemas Externos
- Ações e eventos podem interagir com sistemas além do domínio explorado.
- **Representação**: Papéis rosa.

### 5. Agregados
- Comandos e eventos organizados por tema (atividades, notas, etc.).
- Indicadores para agregar elementos relacionados.

### 6. Contextos Delimitados
- Combinação de agregados conectados por políticas ou eventos.
- **Representação visual**: Diagramas de conexões fortes.

---