import { NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class Response<T = any> implements NestInterceptor {
    intercept(context: any, next: CallHandler): Observable<any>;
}
