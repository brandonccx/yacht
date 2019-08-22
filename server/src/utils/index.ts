import { ParameterizedContext } from 'koa';

import { ErrType } from '../error';

interface ResponseData {
  code: number; // === 0 means success, > 0 means error code
  time: number;
  message?: string;
  data?: any;
}

export const sendError = (ctx: ParameterizedContext, code = ErrType.ServerError, message = '') => {
  ctx.body = {
    code,
    message,
    time: new Date().getTime(),
  };
};

export const sendData = (ctx: ParameterizedContext, data: any) => {
  ctx.body = {
    data,
    code: 0,
    message: '',
    time: new Date().getTime(),
  };
};
