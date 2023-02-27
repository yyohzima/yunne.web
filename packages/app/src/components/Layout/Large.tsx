import * as React from 'react'

import type { ReactNode } from 'react'

type Props = { children: ReactNode }
function Large({ children }: Props) {
  return (
    <main>
      <div className='header'>large-header</div>
      <div>{children}</div>
    </main>
  )
}
export default Large
