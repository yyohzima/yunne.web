import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <main>{children}</main>
  )
}

export default Layout
