import {
  IAppCredentials,
  TAppEnvironment,
  TNodeEnvironment,
} from '~/shared/types';

/**
 * Конфигурация проекта.
 */
export interface IConfig {
  appEnv: TAppEnvironment;
  appId: number;
  enableCors: boolean,
  enableLaunchParamsExpiration: boolean;
  port: number;
  release: string;
  sentryDsn: string | null;
  gqlPublicHttpEndpoint: string;
  gqlPublicWsEndpoint: string;
  gqlAdminHttpEndpoint: string;
  gqlAdminWsEndpoint: string;
  maxThreadsCount: number;
  nodeEnv: TNodeEnvironment;
  vkAppCredentials: IAppCredentials[];
  vkAppApiRps: number;
  vkAppApiAccessToken: string;
}