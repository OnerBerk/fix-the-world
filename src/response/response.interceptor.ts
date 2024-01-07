import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import {catchError, map, Observable, throwError} from 'rxjs';
import {responseHandler} from './responseHandler';
import {errorHandler} from './errorHandler';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((res: unknown) => responseHandler(res, context)),
      catchError((err: HttpException) => throwError(() => errorHandler(err, context))),
    );
  }
}
