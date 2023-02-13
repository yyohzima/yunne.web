import React from 'react'

import breakpoints from '@/components/hooks/breakpoints'

import useScreenSize from '../hooks/useScreenSize'

import ExtraLarge from './ExtraLarge'
import Small from './Small'
import Large from './Large'
import Medium from './Medium'

import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const { screenSize } = useScreenSize()
  const bpoints = breakpoints()
  if (bpoints.less('sm', screenSize.width)) {
    return <Small>{children}</Small>
  }
  if (bpoints.less('md', screenSize.width)) {
    return <Medium>{children}</Medium>
  }
  if (bpoints.less('lg', screenSize.width)) {
    return <Large>{children}</Large>
  }
  return <ExtraLarge>{children}</ExtraLarge>
}

export default Layout
