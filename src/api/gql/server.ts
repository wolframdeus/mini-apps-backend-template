import {
  getSharedResolvers, getAdminResolvers, getPublicResolvers,
} from '~/api/gql/structures';
import {createApolloServer} from '~/api/gql/utils';
import {Container} from 'typedi';
import {ConfigToken} from '~/shared/di';
import {ApolloServer} from 'apollo-server-express';

/**
 * Создает сервер Apollo для пользовательской ручки.
 * @returns {Promise<ApolloServer>}
 */
export const createPublicApolloServer = (): Promise<ApolloServer> => {
  const {gqlPublicWsEndpoint} = Container.get(ConfigToken);

  return createApolloServer({
    resolvers: [...getSharedResolvers(), ...getPublicResolvers()],
    subscriptionsPath: gqlPublicWsEndpoint,
  });
};

/**
 * Создает сервер Apollo для админской ручки.
 * @returns {Promise<ApolloServer>}
 */
export const createAdminApolloServer = (): Promise<ApolloServer> => {
  const {gqlAdminWsEndpoint} = Container.get(ConfigToken);

  return createApolloServer({
    resolvers: [...getSharedResolvers(), ...getAdminResolvers()],
    subscriptionsPath: gqlAdminWsEndpoint,
  });
};
