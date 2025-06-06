# Básico

## 🌟 Navegação

### 🏠 Principal

- [Home](../../../../Pos-Fiap-FullStack-Dev/)
- [Certificados Alura](./../../../Alura%20&%20Certificados/)
- [Fase 1](./../../../Fase%201/)
- [Fase 2](./../Fase%202/)
- [Fase 3](./../Fase%203/)
- [Fase 4](./../Fase%204/)
- [Fase 5](./../Fase%205/)

<!-- ### 📑 Outros
- [README Geral](./../../../../README.md)
- [README Fase 1](./../../../README.md) -->
---

### O que é?

O Docker possui diversos comandos. 
O primeiro comando é o "Docker container", usado para obter informações sobre os containers que estão rodando e aé mesmo os que não estão rodando mais.

Para rodas um container com 1 cpu e 512mb de memória, basta adicionar as flags *"-cpus=1" para cpu e "-m 512m"*

Checando se a configuração foi aplicada, pegue o ID do container com Docker container Is e dê um "inspect" com grep para pegar a informação que desejar. Use *"cpu" e "mem"*.

Para aumentar ou reduzor os recursos de um container em execução, utilize a flag update.

O container não precisa morrer para que os recursos aumentem.
O Backups é indicado para garantir uma cópia segura de um volume existente e, caso ocorra uma falha ou exclusão por engano, é possível utilizar o backups para criar um volume com os dados cópia.

*Containers de dados são usados para separar dados e permitir a comunicação entre vários containers, de forma simples, com os mesmos dados*

Para isso, é nomeado um volume dentro desse container, que será consumido por outros containers