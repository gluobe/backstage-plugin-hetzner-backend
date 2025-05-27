import { AuthService, LoggerService } from '@backstage/backend-plugin-api';
import { catalogServiceRef } from '@backstage/plugin-catalog-node/alpha';
import { HetznerService } from './types';
export declare function createHetznerService({ auth, logger, catalog, }: {
    auth: AuthService;
    logger: LoggerService;
    catalog: typeof catalogServiceRef.T;
}): Promise<HetznerService>;
