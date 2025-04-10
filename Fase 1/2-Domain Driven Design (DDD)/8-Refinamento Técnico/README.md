# Refinamento Técnico

## 🛠️ **O que é?**
Refinamento técnico é uma etapa essencial do desenvolvimento de software que foca na redução de débitos técnicos, mapeamento de considerações do desenvolvimento e mitigação de bugs. Este processo envolve técnicas como:
- Análise da jornada do usuário.
- Definição de requisitos funcionais e não funcionais.
- Desenho da arquitetura da solução.

---

## 🔍 **Refinamento da Jornada do Usuário**
- O objetivo é mapear requisitos técnicos necessários para resolver o problema e construir uma base para as decisões técnicas da solução.
- Técnicas como anotar dúvidas e considerações técnicas ajudam no entendimento da jornada.

---

## 🚧 **Spikes e POCs**
- **Spikes**: Focados na exploração de novas soluções e aquisição de conhecimento, realizados durante a sprint.
- **POCs (Proof of Concept)**: Validação de ideias antes da produção, garantindo que a solução técnica atende aos objetivos do projeto.
- Benefícios:
  - Maior segurança técnica.
  - Clareza sobre dificuldades de implementação.
  - Estimativas mais assertivas.

---

## 🏗️ **Desenho da Arquitetura**
A arquitetura é planejada para organizar a comunicação entre as entidades do sistema. No exemplo de um sistema CRM, temos:
- **Front-end**: Construído com frameworks como React ou Vue.js.
- **Back-end**: Desenvolvido em Node.js, Python ou .NET Core para lógica de negócios.
- **Banco de Dados**: PostgreSQL ou MongoDB, dependendo da estrutura necessária.
- **Serviços de Autenticação**: Auth0 ou OAuth2 para acesso seguro.
- **API Gateway**: Facilita autenticação, autorização e monitoramento de tráfego.
- **Microserviços e Cloud**: Para escalabilidade e flexibilidade em ambientes como AWS ou Azure.
- **Mensageria**: Ferramentas como RabbitMQ ou Kafka para processamento assíncrono.
- **Monitoramento e Log**: Soluções como Prometheus ou ELK Stack.
- **Segurança**: Criptografia, firewalls e práticas de desenvolvimento seguro.

---

## 📜 **Preenchimento do Requisito Técnico**
O requisito técnico da solução é estruturado com base em:
1. **Descrição Detalhada**: Visão completa da solução e seus componentes.
2. **Tecnologias e Ferramentas**: Justificativa das escolhas tecnológicas.
3. **Integrações e Dependências**: Definição de sistemas externos e APIs.
4. **Estratégias de Desenvolvimento**: Metodologias como CI/CD e revisão de código.
5. **Segurança e Conformidade**: Proteções e regulamentos.
6. **Escalabilidade e Manutenibilidade**: Planejamento para crescimento contínuo.
7. **Testes**: Unitários, integração, desempenho e segurança.
8. **Documentação**: Guias técnicos e operacionais.
9. **Plano de Implantação**: Estratégias para rollout e rollback.
10. **Critérios de Aceitação**: Métricas para validar o sucesso da solução.

---

## 📊 **Estimativas**
### Métodos de Estimativa:
- **Planning Poker**:
  - Usa sequência de Fibonacci (1, 2, 3, 5, 8…) para avaliar complexidade técnica e tamanho das tarefas.
  - Gera discussões e alinhamento de impacto no time.
- **Monte Carlo**:
  - Analisa percentuais de probabilidade de entrega com base em dados históricos.
  - Exemplos gráficos indicam margens de entrega assertiva, como no caso de 27 itens em 79,7% das sprints.

---