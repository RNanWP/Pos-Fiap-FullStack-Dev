# Projeto de Orquestração com Docker Compose

## 🌟 Navegação

### 🏠 Principal

- [Home](./../../Pos-Fiap-FullStack-Dev/)
- [Certificados Alura](./../../../Alura%20&%20Certificados/)
- [Fase 1](./../Fase%201/)
- [Fase 2](./../Fase%202/)
- [Fase 3](./../Fase%203/)
- [Fase 4](./../Fase%204/)
- [Fase 5](./../Fase%205/)

### O QUE VEM POR AÍ?

Este repositório mostra como orquestrar múltiplos containers usando **Docker Compose** a partir de um único arquivo `docker-compose.yml`.

---

## 📋 Pré-requisitos

- Docker instalado na máquina  
- Docker Compose (v2 ou superior)

---

## 🔧 Estrutura do `docker-compose.yml`

```yaml
version: "3.8"              # Sintaxe e recursos do Compose
networks:
  app-network:              # Rede isolada para comunicação entre serviços
volumes:
  db-data:                  # Volume para persistência de dados

services:
  postgres:
    build:
      context: .            # Dockerfile local na raiz
    image: my-postgres:latest
    ports:
      - "5432:5432"         # Host:Container
    volumes:
      - db-data:/var/lib/postgresql/data
    restart: unless-stopped # Política de reinício
    networks:
      - app-network

  kong:
    image: kong:3.0
    environment:
      KONG_DATABASE: "postgres"
      KONG_PG_HOST: "postgres"
    ports:
      - "8000:8000"
      - "8001:8001"
    depends_on:
      - postgres
    networks:
      - app-network
```

## 🔍 Campos principais
- **version**:
Define a versão da sintaxe e os recursos disponíveis no Compose.

- **networks**:
Cria redes isoladas. Cada serviço pode se conectar à rede para se comunicar.

- **volumes**:
Define volumes para armazenamento persistente. Montados em diretórios dentro do container.

- **services**:
Bloco principal onde cada serviço/container é definido.

```yaml
Chave:	 

build: Caminho  para diretório com Dockerfile (substitui image se usado).

image:	Imagem Docker a ser usada para o serviço.

ports:	Mapeamento de portas no formato Host:Container.

depends_on:	Garante a ordem de inicialização (ex.: só inicia depois que outro serviço estiver pronto).

restart:	Política de reinício:
```
---

```markdown
 - `no` (não reinicia)  
  - `on-failure` (reinicia em caso de erro)  
  - `always` (reinicia sempre que parar)  
   - `unless-stopped` (como `always`, mas não reinicia se parado manualmente) 
|
| environment 
| Variáveis de ambiente ou uso de env_file para apontar .env. 
|
| volumes 
| Montagem de pastas/volumes criados. 
|
| command / entrypoint 
| Sobrescreve CMD/ENTRYPOINT definidos na imagem ou Dockerfile. 
|
```

## 🚀 Comandos Úteis
**Comando** --	**Descrição**

`docker compose up`: Cria e inicia todos os serviços

`docker compose build`: Apenas faz o build das imagens

`docker compose logs`:	Exibe logs dos containers

`docker compose restart`:	Reinicia os containers

`docker compose ps`:	Lista os containers em execução

`docker compose scale <svc>=N`:	Ajusta número de réplicas de um serviço

`docker compose start`:	Inicia containers parados

`docker compose stop`:	Para containers em execução

`docker compose down`:	Para e remove containers, redes e volumes criados