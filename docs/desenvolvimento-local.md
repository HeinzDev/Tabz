
# Desenvolvimento em ambiente local

Esse sistema foi desenvolvido em SPA (Single Page Application)

O Framework usado é o [ExpressJS](https://expressjs.com/pt-br/)
portanto, é necessário o _[NodeJS](https://nodejs.org/en)_ instalado para desenvolvimento e gerênciamento de pacotes

Para verificar a instalação das ferramentas, execute os seguintes comandos:

```
$ node --version
v18.16.0 # exemplo retorno mostrado pelo comando

$ npm --version
8.19.2 # exemplo de retorno mostrado pelo comando
```

Caso o terminal não retorne os valores esperados, verifique a instalação do Node.js em seu ambiente de desenvolvimento.

## Script Automatizado

Na raiz do projeto, há um shell script chamado `launch.sh` que automatiza a instalação e execução do projeto localmente no ambiente Linux. Para executar o script, é necessário conceder permissão de execução ao arquivo e, em seguida, executar o script:

```
$ cd Tabz # Caso ainda não esteja na raiz do projeto
$ chmod +x launch.sh
$ ./launch.sh
```
O script `launch.sh` realiza as seguintes operações:

- Verifica se o _NodeJS_ está instalado e se a versão é compatível com o projeto
- Verifica se o projeto está instalado, caso não esteja, realiza a  instalação.
- Pergunta se deve instalar o banco de dados em ambiente local usando o [Docker](https://www.docker.com) na porta _27017_ ou se deseja conectar ao [Cluster](https://www.mongodb.com/atlas/database) na nuvem. ( Para configurar o banco de dados, consulte a seção "Banco de dados e variáveis de ambiente" ).

Se você preferir não executar o script, também pode instalar e executar o sistema manualmente seguindo as etapas a seguir.

## Instalando o projeto manualmente
Após clonar o projeto [Tabz](https://github.com/HeinzDev/Tabz) siga estas etapas para instalar o projeto:
```
$ cd Tabz
$ npm install
$ npm run dev
```

uma instância do projeto estará disponível no endereço https://localhost:8080

## Banco de dados e variáveis de ambiente

O projeto é capaz de conectar um banco de dados em nuvem ou em um contêiner Docker local. Para definir qual instância do banco de dados será utilizada, é necessário configurar variáveis de ambiente para realizar a conexão. 

Crie um arquivo `.env` na raiz do projeto com as variáveis `MONGODB_USER` e `MONGODB_PASSWORD`, definindo usuário e senha para conexão com o cluster, ou a variável `LOCAL` com o endereço do contêiner Docker. Você também pode mudar a porta do projeto com a variável `PORT`.

Arquivo `.env`:

>MONGODB_USER='usuarioexemplo'

>MONGODB_PASSWORD='senhaexemplo'

ou

>LOCAL='mongodb://localhost:27017'

>PORT=3000 # A porta padrão será 8080 caso não defina a variável

Caso a variável de ambiente `USER` esteja vazia, o sistema fará a conexão com o contêiner Docker usando o endereço definido na variável `LOCAL`.
