The server is implemented by [Koa][koa_ln], using [sequelize][sqlz_ln] as ORM

### Start Server

```sh
  npm start
```

### Development

In development mode, we compile ts files of src directory with watching, and supervise the file changing in build directory to restart server via nodemon.

```sh
  npm run dev
```

[koa_ln]: https://github.com/koajs/koa
[sqlz_ln]: https://github.com/sequelize/sequelize