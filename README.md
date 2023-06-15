# Connect Four Game

Este é um jogo de Connect Four desenvolvido como parte de um trabalho de inteligência artificial. O jogo permite que dois jogadores joguem entre si ou contra a máquina. O algoritmo Minimax com poda alpha-beta é utilizado para tomar decisões da IA.

## Tecnologias utilizadas

- React
- TypeScript
- NestJS
- Prisma ORM
- Banco de dados (SQLite, PostgreSQL, etc.)
- Yarn

## Funcionalidades

- Modo de jogo humano x humano: dois jogadores podem jogar entre si em turnos.
- Modo de jogo máquina x humano: um jogador joga contra a máquina, que utiliza o algoritmo Minimax com poda alpha-beta para tomar decisões.
- Registro de pontuações: o jogo registra o placar de vitórias de cada jogador.
- Banco de dados local: utiliza um banco de dados local para armazenar as informações do jogo.

## Instalação

1. Clone o repositório para o seu ambiente local.
2. Navegue até o diretório do projeto: `cd connect-four-game`.
3. Execute `yarn install` para instalar as dependências do projeto.

## Configuração do banco de dados

1. Configure as informações de conexão com o banco de dados no arquivo `.env`.
2. Certifique-se de ter um banco de dados local instalado e em execução.
3. Execute `npx prisma migrate dev` para executar as migrações do banco de dados.

## Executando o projeto

1. Navegue até o diretório do projeto: `cd connect-four-game`.
2. Execute `yarn start` para iniciar o servidor de desenvolvimento.
3. Abra o navegador e acesse `http://localhost:3000` para jogar o Connect Four.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
