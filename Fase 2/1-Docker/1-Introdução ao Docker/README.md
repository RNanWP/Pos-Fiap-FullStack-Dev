# FASE 2

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

O Docker foi lançado em 2013. É uma ferramenta Open Source que foi criada com intuito de melhorar o isolamento e uso de recursos, além de rodar aplicações sem a necessidade de uma interface gráfica, se comparado com uma VM. Só foi possível graças à possibilidade de isolar processos e virtualização, funcionalidades que estáo presentes no Kernel do Linux.

Junto do Kernel temos duas outras tecnologias que isolam uso dos containers, chamadas de "Cgroup" e "Namespaces"

As Cgroups são resposáveis por definir limites no uso de recursos em precessos Linux. Podemos definir o quanto de CPU um determinado processo pode usar, priorizando os que forem mais importantes. São usados para por limites no uso de recursos como CPU e memória, mantendo o controle de quais processos podem ou devem ser reiniciados, interrompidos ou congelados.

Já a tecnologia "Namespaces" permite criar e lidar com diferentes cenários em um mesmo sistema. Com ela, conseguimos analisar propriedades globais diferentes e isoladas em cada contexto. O container tem um um ambiente isolado, silimar ao VM (Virtual Machine), mas podem ter containers diferentes com outras aplicações rodando em paralelo no mesmo servidor.

Um exemplo de como seria - imagine um navio de cargueiro com varios containers. Caso alguem container caia no mar, os demais não seguirão sem serem afetados, nem o navio (que representa o host onde os containers estão rodando).

Imagine que para rodar uma aplicação NodeJs sejá necessário instalar a versão do Node compatível com o seu código, instalar as dependências pelo NPM/YARN e realizar a configuração padrão.

O Docker Hub é basicamente um Github voltado para imagens Docker. Assim como o Github tem repositórios públicos que qualquer pessoa consegue clonar, fazer o fork e usar o código criado por outra pessoa, o Docker Hub funciona de maneira muito similar. Podemos usar essas imagens fazendo o "pull" por meio da URL e tag da imagem.

As tagas são utilizadas para definir uma versão da imagem criada, como forma de controle, atualização e organização. Elas ajudam a aplicar melhorias constantes nas imagens, seja para corrigir bugs, melhorar processos ou até mesmo realizar correções de segurança

É preciso declarar comandos, instalações, variáveis, portas, etc. Assim criamos imagens personalizadas. Tudo é feito por meio de um arquivo chamado "Dockfile".
