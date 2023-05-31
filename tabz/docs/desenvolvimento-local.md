
# Desenvolvimento em ambiente local

Esse sistema foi desenvolvido em SPA (Single Page Application)

O Framework usado é o [ExpressJS](https://expressjs.com/pt-br/)
sendo assim necessário o _[NodeJS](https://nodejs.org/en)_ instalado para desenvolvimento e gerênciamento de pacotes

Para verificar se já tem aí o ambiente pronto, execute os seguintes comandos:

```
$ node --version
v18.16.0 # exemplo retorno mostrado pelo comando
```
```
$ npm --version
8.19.2 # exemplo de retorno mostrado pelo comando
```

Caso o terminal não retorne os valores verificar a instalação do _Nodejs_ no seu ambiente de desenvolvimento.

## Script Automatizado

Na raiz do projeto há um shell Script _launch.sh_ que automatiza a instalação e execução do projeto localmente para o ambiente Linux, para execução do script é necessário ativar a permissão de execução do arquivo e em seguida rodar o script:

```
$ cd Tabz # Caso ainda não esteja na raíz do projeto
$ chmod +x launch.sh
$ ./launch.sh
```
Operações do script _launch.sh_:

- Verifica se o _NodeJS_ está instalado e se a versão é compatível com o projeto
- Verifica se o projeto está instalado, caso não, o instala.
- Pergunta se deve instalar o banco de dados em ambiente local com o [Docker](https://www.docker.com) na porta _27017_ ou se deseja conectar ao [Cluster](https://www.mongodb.com/atlas/database) na nuvem ( Para realizar a configuração do banco de dados confira o tópico _Banco de dados e variáveis de ambiente_ )


Se não deseja executar o script você também pode instalar e executar o sistema manualmente com os seguintes passos.

## Instalando o projeto
Após realizar o git clone do projeto [Tabz](https://github.com/HeinzDev/Tabz) realize os seguintes passos para a instalação do projeto

```
$ cd Tabz
$ npm install
$ npm run dev
```

uma instância do projeto estará disponível no endereço https://localhost:8080

## Banco de dados e variáveis de ambiente

O projeto é capaz de conectar um banco de dados em nuvem ou em um conteiner docker local. Para definir qual instância do banco de dados será utilizada é necessário configurar variáveis de ambiente para realizar a conexão. 

Crie um arquivo .env na raíz do projeto com o as variáveis MONGODB_USER e MONGODB_PASSWORD definindo usuário e senha para conexão com o cluster ou a variável LOCAL com o endereço do container Docker. Aqui você também pode mudar a porta do projeto com a variável PORT

Arquivo _.env_:
>MONGODB_USER='usuarioexemplo'

>MONGODB_PASSWORD='senhaexemplo'

ou

>LOCAL='mongodb://localhost:27017'

>PORT=3000 # A porta padrão será 8080 caso não defina a variável


Caso a variável de ambiente USER esteja vazia, o sistema fará a conexão com o conteiner Docker com o endereço definido na variável LOCAL