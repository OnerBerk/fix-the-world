import {
  BadRequestException,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

export const errorHandler = (exception: HttpException, context: ExecutionContext) => {
  const ctx = context.switchToHttp();
  const response = ctx.getResponse();
  const request = ctx.getRequest();

  const status =
    exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

  let message = exception.message;

  if (exception instanceof BadRequestException) {
    const response = exception.getResponse();
    if (typeof response === 'object' && response.hasOwnProperty('message')) {
      message = response['message'];
    }
  }
  response.status(status).json({
    status: false,
    statusCode: status,
    path: request.url,
    message: message ? message : exception.message,
  });
};
