import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://blog-drupal.feisty.paw:8000/graphql',
  cache: new InMemoryCache()
});