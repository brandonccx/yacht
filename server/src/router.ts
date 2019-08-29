import Router from 'koa-router';

import { createUserHandler, getUserListHandler, loginHandler, logoutHandler } from './handler';

export const router = new Router();

router.get('/user', getUserListHandler());

router.post('/user', createUserHandler());

router.post('/api/login', loginHandler());

router.get('/api/logout', logoutHandler());
