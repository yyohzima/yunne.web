import * as React from 'react'

import type { ReactNode } from 'react'

type Props = { children: ReactNode }
function Medium({ children }: Props) {
  return (
    <main>
      <div className='header'>medium-header</div>
      <div>{children}</div>
    </main>
  )
}
export default Medium
