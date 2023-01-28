import React from 'react'

import { useGetBooksQuery } from '@/api/urql.generated'

const Home = () => {
  const [{ data, error, fetching }] = useGetBooksQuery()
  console.group('--- urql.result ---')
  console.log(fetching)
  console.log(data)
  console.log(error)
  console.groupEnd()

  return (
    <main className='hoge'>
      <div>ああああ</div>
    </main>
  )
}

export default Home