# Omnistack: NodeJS



### Manutenção do banco no terminal

`docker ps` -> mostrará todas as imagens de banco de dados que estão rodando na máquina virtual do docker (mongo, maria, etc)



`docker start` -> irá startar a imagem e o banco estará rodando na máquina virtual (se o banco ao menos estivesse online num servidor externo pra sempre....)



---



**Express** -> Microframework para rotas e views
`npm install express`



**Nodemon** -> serve pra reinicializar o servidor toda vez que alterar o código
`npm install nodemon`

Pra usar o atalho, é necessário colocar esse script no script de packages.json: 

``` json
"scripts": {
  "dev": "nodemon server.js"
},
```





**Docker** -> serve para conteinerização. Máquinas virtuais rodando com Linux pro PC para colocar dependências, instalações (mongo, node, sqlserver) em um lugar que não vá afetar a própria máquina, mas sim a máquina virtual. Pra mim, não rolou deixar o mongo num contêiner linux, apenas windows. Go figure. Suspeito que seja por causa dos meus míseros 4Gb de RAM.



**mongoose** -> serve para, em vez de usar a linguagem do mongodb, usar uma linguagem de sintaxe js para criação de tabelas
`npm install mongoose`



**Robo 3T** -> visualiza as tabelas do mongo. 



**Require-dir** -> Faz um require de todos os js de um diretório
`npm install require-dir`



**Insomnia** -> Bonitificador de json. Ele vai interagir com a API fazendo todas as operações REST.



**Mongoose paginate** -> Irá paginar pro get retornar um dado número de objetos json
`npm install mongoose-paginate`



**CORS** -> Ele não deixa acesso externo (fora do mesmo servidor) à API. Instalando essa dependência no npm vai permitir acesso de outros aplicativos, tipo o React.

`npm install cors`



