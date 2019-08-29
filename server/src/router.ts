import { ParameterizedContext } from 'koa';
import Router from 'koa-router';

import { ErrType } from './error';
import { User } from './models';
import { sendData, sendError } from './utils';

export const router = new Router();

router.get('/user', async ctx => {
  ctx.body = await User.findAll();
});

router.post('/user', async ctx => {
  ctx.body = await User.create(ctx.request.body);
});

router.post('/api/login', async ctx => {
  cors(ctx);
  const {name, pwd} = ctx.request.body;
  if (name && pwd) {
    const user = await User.findOne({
      where: {name, pwd}
    });

    if (user) {
      ctx.cookies.set('yacht-login', 'true', {
        expires: new Date(Date.now() + 3600 * 24),
        maxAge: 7200000,
        domain: 'localhost',
        httpOnly: false
      });
      sendData(ctx, {
        id: user.id,
        name: user.name,
      });
    } else {
      sendError(ctx, ErrType.UserPwdIncorrent, 'user name or password is incorrect');
    }
  }
});

router.get('/api/logout', async ctx => {
  cors(ctx);
  ctx.cookies.set('yacht-login', 'false', {
    maxAge: 0,
    domain: 'localhost',
    httpOnly: false
  });
  sendData(ctx, {});
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
