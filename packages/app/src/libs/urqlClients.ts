import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from '@urql/core'

const isServerSide = typeof window === 'undefined'

const ssr = ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
})

// TODO useSSRUrqlClient
const urqlClient = createClient({
  // TODO get from env
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssr, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
})

export default urqlClient
