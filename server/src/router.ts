import Router from 'koa-router';
import { User } from './models';

export const router = new Router();

router.get('/user', async ctx => {
  ctx.body = await User.findAll();
});
router.post('/user', async ctx => {
  ctx.body = await User.create(ctx.request.body);
});