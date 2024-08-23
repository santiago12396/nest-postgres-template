<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## 1) Installation

```bash
$ pnpm install
```

## 2) Config .env

Renombrar ```.env.template```  a ```.env``` y agregar los valores de las variables de entorno.

## 3) Installation DB

```bash
$ docker-compose up -d
```

## 4) Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```