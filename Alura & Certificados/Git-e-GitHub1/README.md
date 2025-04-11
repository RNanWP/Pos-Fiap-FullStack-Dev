# Git e GitHub

## 🌟 Navegação

### 🏠 Principal
- [Home](./../../../Pos-Fiap-FullStack-Dev/) | 
[Fase 2](./../../Fase%202/) | [Fase 3](./../../Fase%203/) | [Fase 4](./../../Fase%204/) | [Fase 5](./../../Fase%205/)
- [TypeScript](./../../Fase%201/1-TypeScript/)
- [Domain Driven Design](./../../Fase%201/2-Domain%20Driven%20Design%20(DDD)/)

---
**Nunca realizar um commit de um código que você sabe que contém bugs.**
 O ideal é que o commit contenha somente código funcional.
---

### Códigos:

**Listar os repositórios remotos:**

```
git remote -v
```

---

**Remover um repositório remoto:**

```
git remote remove origin
```

---

**Alterar a URL de um repositório remoto:**

```
git remote set-url origin https://github.com/seu-usuario/seu-repositorio.git
```

---

**Alterar o apelido de um repositório remoto:**

```
git remote rename origin novo-origin
```

---

**Para configurar a identidade do autor do commit, digite no terminal o comando:**

```
git -config --global user.email "seuemailaqui@example.com"
git config --global user.name "seu nome aqui"
```
---
O Git oferece a possibilidade de adicionar mais de um autor a um commit. Para isso, após escrever a mensagem do commit, pulamos duas linhas e usamos a palavra-chave Co-authored-by:, seguido do nome e e-mail associado ao GitHub (entre < >) de cada pessoa colaboradora.

```
$ git commit -m "Adicionar nova funcionalidade.
>
>
Co-authored-by: NOME <nome@email.com>
Co-authored-by: OUTRO-NOME <outro@email.com>"
```

---

**Baixar o repositório em seu computador, você deve realizar um clone do projeto através do comando:**

```
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

---

**Você pode baixar somente uma atualização dos commits através do comando:**

```
git pull origin main
```

---

**Visualize quais arquivos foram modificados no repositório local com o comando:**

```
git status
```

---

**Listar os commits realizados no repositório, com dados do autor, data e mensagem de cada commit, utilizando o comando:**

```
git log
```

---

**Visualizar os repositórios remotos linkados com o repositório local, utilizando o comando**

```
git remote
```
