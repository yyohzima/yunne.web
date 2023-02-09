import type { SSRData } from 'next-urql'

declare global {
  interface Window {
    __URQL_DATA__?: SSRData
  }
}
