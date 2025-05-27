import { AuthService, LoggerService } from '@backstage/backend-plugin-api';
import { catalogServiceRef } from '@backstage/plugin-catalog-node/alpha';
import { TodoListService } from './types';
export declare function createTodoListService({ auth, logger, catalog, }: {
    auth: AuthService;
    logger: LoggerService;
    catalog: typeof catalogServiceRef.T;
}): Promise<TodoListService>;
