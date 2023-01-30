import {
  cacheExchange,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from '@urql/core'
import { withUrqlClient } from 'next-urql'
import * as React from 'react'

import Layout from '@/components/Layout/Layout'

import type { AppProps } from 'next/app'
import '@/styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component { ...pageProps } />
    </Layout>
  )
}

const isServerSide = typeof window === 'undefined'

const ssr = ssrExchange({
  isClient: !isServerSide,
  // eslint-disable-next-line no-underscore-dangle
  initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
})

// TODO libs
export default withUrqlClient(() => ({
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
}))(App)
