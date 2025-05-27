import express from 'express';
import { HttpAuthService, LoggerService, UserInfoService } from '@backstage/backend-plugin-api';
import { HetznerService } from './services/HetznerService/types';
export interface RouterOptions {
    logger: LoggerService;
    httpAuth: HttpAuthService;
    hetznerService: HetznerService;
    userInfo: UserInfoService;
}
export declare function createRouter(options: RouterOptions): Promise<express.Router>;
