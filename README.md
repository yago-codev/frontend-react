# Frontend <img src="https://www.moovin.com.br/assets/images/svg/logo2.svg" width="50">

### Desafio

Desenvolver um painel integrado com uma API, seguindo o modelo de layout proposto.

### Como startar:

Para iniciar você deve instalar as dependências(utilizo o Yarn, pois acho ele mais performático):
```zsh
  foo@bar:~$ yarn install
```
Em seguida você deve iniciar um webserver local:
```zsh
  foo@bar:~$ yarn start
```

### Layout

https://xd.adobe.com/spec/21e60bfc-8b67-4f93-7e70-0434b8eafbd6-57d7/

### API & Exemplos

- Documentação: https://gorest.co.in/
- Endpoint: https://gorest.co.in/public-api/
- Token: Será enviado por e-mail 

#### Consulta de postagens: 
```perl
GET https://gorest.co.in/public-api/posts?_format=json&access-token={{token}}&page={{page}}
```