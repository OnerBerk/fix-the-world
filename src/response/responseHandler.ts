import {ExecutionContext} from '@nestjs/common';

export const responseHandler = (res: any, context: ExecutionContext) => {
  const ctx = context.switchToHttp();
  const response = ctx.getResponse();
  const request = ctx.getRequest();

  const statusCode = response.statusCode;

  return {
    status: true,
    path: request.url,
    statusCode,
    result: res,
  };
};
