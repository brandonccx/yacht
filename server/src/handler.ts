import { ParameterizedContext } from 'koa';

import { ErrType } from './error';
import { User } from './models';
import { sendData, sendError } from './utils';

const cors = (ctx: ParameterizedContext<any, {}>) => {
  ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:8082');
  ctx.response.set('Access-Control-Allow-Credentials', 'true');
}

export const getUserListHandler = () => async (ctx: ParameterizedContext<any, {}>) => {
  sendData(ctx, {
    list: await User.findAll(),
  });
}

export const createUserHandler = () => async (ctx: ParameterizedContext<any, {}>) => {
  sendData(ctx, await User.create(ctx.request.body));
}

export const loginHandler = () => async (ctx: ParameterizedContext<any, {}>) => {
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
}

export const logoutHandler = () => async (ctx: ParameterizedContext<any, {}>) => {
  cors(ctx);
  ctx.cookies.set('yacht-login', 'false', {
    maxAge: 0,
    domain: 'localhost',
    httpOnly: false
  });
  sendData(ctx, {});
}
