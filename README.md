## CHATBOT  DO TELEGRAM
### Objetivo:

Cria um chatbot utilizando o dialogflow da google, utilizando macning learn para realizar pesquisas diretamente no youtube de assuntos específicos.
### Bibleotecas utilizadas:

- telegram-bot-api
- dialogflow
- youtube-node-api

### Integrações desse projeto

- API TELEGRAM
- API DIALOGFLOW
- API YOUTUBE DATA
### Como usar o Projeto?

É necessário conhecer o básico de dialogflow e geração de apis no google cloud para executar esse projeto.

- Clone o repositório: git clone https://github.com/lincolngadea/chatbot-telegram-nodejs.git
- Caso não dê algum problema com a chave atual do google em sua conta, você vai precisar criar um novo projeto no dialogflow e criar uma nova credencial apontando para o projeto e baixar a api-key do dialog flow. link: https://dialogflow.cloud.google.com/
- Uma vez criada a api-key do dialogflo salve no projeto substituindo ela pelo arquivo chatbot-key.json e mantendo o mesmo nome
- Pode ser necessário também, criar uma nova api-key para o youtube, faça isso no link:https://developers.google.com/youtube/v3/getting-started
- ponte a credencial da api do youtube para o mesmo projeto criado no dialogflow
- Cole a Chave da API do youtube no arquivo yt-config.json, substituindo pela chave atual.

### Testando no Telegram

- Pesquise no Search do Telegram por "botfather"
- Inicie um chat com o botfather e digite ./start
- Clique em criar um novo bot e siga as instruções
- Será gerada uma chave API para integração com o bot criado
- copie a chave gerada e substitua na linha 5 do index.js

Realize seus testes e qualquer dúvida estou a disposição.
