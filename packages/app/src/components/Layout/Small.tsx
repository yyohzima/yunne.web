import * as React from 'react'

import type { ReactNode } from 'react'

type Props = { children: ReactNode }

function Small({ children }: Props) {
  return (
    <main>
      <div className='header'>small-header</div>
      <div>{children}</div>
    </main>
  )
}

export default Small
