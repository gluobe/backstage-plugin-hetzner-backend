import {
  mockCredentials,
  startTestBackend,
} from '@backstage/backend-test-utils';
import { hetznerBackendPlugin } from './plugin';
import request from 'supertest';
import { catalogServiceMock } from '@backstage/plugin-catalog-node/testUtils';

describe('plugin', () => {
  it('should always pass this dummy test', async () => {
    expect(true).toBe(true);
  });
});
