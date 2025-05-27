import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './router';
import { createHetznerService } from './services/HetznerService';
import { OpenAPI } from './hetznerClient/core/OpenAPI';

/**
 * Backstage Plugin Hetzner Backend
 *
 * @public
 */
export const hetznerBackendPlugin = createBackendPlugin({
  pluginId: 'hetzner',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        httpAuth: coreServices.httpAuth,
        httpRouter: coreServices.httpRouter,
        config: coreServices.rootConfig,
        userInfo: coreServices.userInfo,
      },
      async init({ logger, httpAuth, httpRouter, config, userInfo }) {
        const token = config.getOptionalString('backend.hetzner.token');

        if (!token) {
          logger.error('HCLOUD_TOKEN is not set.');
          throw new Error('HCLOUD_TOKEN is not set.');
        }

        OpenAPI.TOKEN = token;

        logger.info('Hetzner API token loaded successfully.');

        const hetznerService = await createHetznerService({
          logger,
        });

        httpRouter.use(
          (await createRouter({
            logger,
            httpAuth,
            hetznerService,
            userInfo,
          })) as any
        );
      },
    });
  },
});
