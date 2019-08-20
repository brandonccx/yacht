import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import yargs from 'yargs';

import sequelize from './db';
import { router } from './router';

const {argv} = yargs.options({
  init: {type: 'boolean', default: false}
});

sequelize
  .sync({force: argv.init})
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

const PORT = 9000;
const app = new Koa();

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT);

console.log(`app is listen on *:${PORT}`);