# alura-cinetag

About Repositorio base para desenvolvimento do projeto CineTag da trilha Front End ONE

## Pre-Requisitos

- Ter o Node instalado;
- Ter o pacote json-server instalado;

## Configuração

- Na linha 11 do arquivo `cinetag/src/pages/home/index.js` altere a `url` para a utilizada pelo json-server, caso necessário.

- Na linha 13 do arquivo `cinetag/src/pages/player/index.js` altere a `url` para a utilizada pelo json-server, caso necessário.

## Execução

1. Em um terminal ative o json-server:

```
json-server --watch cinetag/src/json/db.json -p 8000
```

2. Acesse o [site](TODO) ou ative a aplicação

```
npm run dev
```

3. Pronto!
