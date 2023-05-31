#!/bin/bash

#Tenta trocar a versão do node para a recomendada com o nvm (se instalado)
nvm use 18

node_version=$(node -v)
required_version="v14.0.0"

#verifica se o zenity está instalado 
if [ -x "$(command -v zenity)" ]; then
   ZENITY=TRUE
else
   ZENITY=FALSE   
fi

# Compara as versões usando o comando "node --version"
if [[ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" != "$required_version" ]]; then
    if [ "$ZENITY"==TRUE ]; then
     zenity --info --title="Falha na execução!" --text="A versão do nodeJS utilizada é inferior a 14." --width="300" --height="50" 2>/dev/null
     exit 1
    else
     echo 'A versão do nodeJS utilizada é inferior a 14.'
     exit 1
    fi
fi

#Método para reiniciar o Docker
restart_docker_db() {
 docker stop mongo
 docker rm mongo
 docker run --name mongo -p 27017:27017 -d mongo
}


# Exibe uma janela com dois botões "Sim"(Rodar o Banco de dados no Docker) e "Não"(Ignorar o Docker)
if [ "$ZENITY" == TRUE ]; then

   zenity --question --text "Deseja Executar o banco de dados localmente com o Docker?" --ok-label="Executar localmente" --cancel-label="Não Desejo executar localmente"

   ZEN_RESPOSTA=$?
   #zen_resposta = 1, o script NÃO executará o banco de dados com o Docker. zen_resposta = 0, O código vai executar o Docker. 
   if [ "$ZEN_RESPOSTA" = "0" ]; then
    DB_DOCKER=TRUE
   else
    DB_DOCKER=FALSE
   fi
else
  
   #Janela de pergunta por terminal
   echo 'Deseja executar o banco de dados localmente pelo Docker?<yes/no>'
   read RESPOSTA
   
   case $RESPOSTA in
  yes)
    DB_DOCKER=TRUE
    ;;

  no)
    DB_DOCKER=FALSE
    ;;
esac
fi

# Tenta criar o banco de dados, se der problema apaga e cria novamente.
if [ "$DB_DOCKER" != FALSE ]; then
	docker run --name mongo -p 27017:27017 -d mongo || restart_docker_db
fi

APP_DIR="${PWD}"

#Instalando o projeto WEB
if [ -e "$APP_DIR"/package-lock.json ]
then
  echo 'Tabz já instalado!'
else
  echo '> Instalando o projeto'
  npm install
fi

#Executando o projeto
echo '> Executando o projeto:'
npm run dev
