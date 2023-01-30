import * as React from 'react'

import { useGetBooksQuery } from '@/api/urql.generated'

function Home() {
  const [{ data, error, fetching }] = useGetBooksQuery()
  return <div>ああああ</div>
}

export default Home
