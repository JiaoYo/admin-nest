import { NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './global.serice';
export declare class GlobalGuard implements NestInterceptor {
    private authService;
    constructor(authService: AuthService);
    intercept(context: ExecutionContext, next: any): Observable<any>;
}
