import { ParameterizedContext } from 'koa';
import Router from 'koa-router';
import { User } from './models';

export const router = new Router();

router.get('/user', async ctx => {
  ctx.body = await User.findAll();
});
router.post('/user', async ctx => {
  ctx.body = await User.create(ctx.request.body);
});

router.get('/api/login', async ctx => {
  cors(ctx);
  ctx.cookies.set('yacht-session', 'abc', {
    expires: new Date(Date.now() + 3600 * 24),
    maxAge: 7200000,
    domain: 'localhost',
    httpOnly: false
  });
  ctx.body = 'success!!';
});

router.get('/api/user', async ctx => {
  const cookie = ctx.cookies.get('yacht-session');
  console.log(`the cookie is ${cookie}`);
  cors(ctx);
  ctx.body = 'hello!!';
});

function cors (ctx: ParameterizedContext<any, Router.IRouterParamContext<any, {}>>) {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:8082');
  ctx.response.set('Access-Control-Allow-Credentials', 'true');
}