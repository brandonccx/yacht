import { ParameterizedContext } from 'koa';
import Router from 'koa-router';
import { User } from './models';
import result from './utils/result';

export const router = new Router();

router.get('/user', async ctx => {
  ctx.body = await User.findAll();
});

router.post('/user', async ctx => {
  ctx.body = await User.create(ctx.request.body);
});

router.get('/api/login', async ctx => {
  cors(ctx);
  const {name, pwd} = ctx.request.body;
  let login = false;
  if (name && pwd) {
    await User.findOne({
      where: {name, pwd}
    }).then(res => {
      login = !!res
    })
    if (login) {
      ctx.cookies.set('yacht-login', 'true', {
        expires: new Date(Date.now() + 3600 * 24),
        maxAge: 7200000,
        domain: 'localhost',
        httpOnly: false
      });
    }
  }
  ctx.body = result(login ? null : '用户名或密码错误', null);
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
