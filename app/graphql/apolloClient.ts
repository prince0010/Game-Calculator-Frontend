import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { fetch } from 'cross-fetch'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.6.64:4000/graphql',
    fetch: fetch,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }),
  cache: new InMemoryCache(),
})

export default client