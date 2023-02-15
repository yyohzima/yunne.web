import { useEffect, useState } from 'react'

export type ScreenSize = {
  width: number
  height: number
}

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  })

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [screenSize])

  useEffect(() => handleResize(), [])

  return { screenSize }
}
