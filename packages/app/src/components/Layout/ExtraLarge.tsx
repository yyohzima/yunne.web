import * as React from 'react'

import type { ReactNode } from 'react'

type Props = { children: ReactNode }

function ExtraLarge({ children }: Props) {
  return (
    <main>
      <div className='header'>extra-header</div>
      {children}
      <div className='footer'>footer</div>
    </main>
  )
}

export default ExtraLarge
