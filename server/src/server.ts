import Koa from 'koa';
import Router from 'koa-router';
import sequelize from './db';
import { User } from './models';
import bodyParser from 'koa-bodyparser';

sequelize
  .sync()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

const PORT = 8080;
const app = new Koa();
const router = new Router();

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

// Test with `curl -i http://localhost:8080/user`
router.get('/user', async ctx => {
  ctx.body = await User.findAll();
});

/**
 * Test with:
 * curl -i -X POST \
 *   -H 'Content-Type:application/json' \
 *   -d '{"name": "brandon", "description": "hello"}' \
 *   http://localhost:8080/user
 * 
 */
router.post('/user', async ctx => {
  console.log(ctx.request.body);
  ctx.body = await User.create(ctx.request.body);
});

app.listen(PORT);

console.log(`app is listen on *:${PORT}`);