import Koa from 'koa';
import Router from 'koa-router';

const PORT = 8080;
const app = new Koa();
const router = new Router();

router.get('/user', async ctx => {
  ctx.body = ['Brandon', 'Bunny', 'lovelyun'];
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT);

console.log(`app is listen on *:${PORT}`);