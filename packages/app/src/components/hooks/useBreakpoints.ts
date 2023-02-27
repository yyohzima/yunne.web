import useScreenSize from '@/components/hooks/useScreenSize'

export type BreakpointValues = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}
export type BreakpointKey = keyof BreakpointValues
export type Breakpoint = BreakpointKey | number

export default function useBreakpoints() {
  const values = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  }
  const unit = 'px'

  function getValue(key: Breakpoint): number {
    if (typeof key === 'number') {
      return key
    }
    return values[key]
  }

  function less(key: Breakpoint, width: number) {
    const value = getValue(key)
    return width <= value
  }

  function up(key: Breakpoint) {
    const value = getValue(key)
    return `@media (min-width:${value}${unit})`
  }

  function down(key: Breakpoint) {
    const value = getValue(key)
    return `@media (max-width:${value}${unit})`
  }

  function between(start: Breakpoint, end: Breakpoint) {
    const s = getValue(start)
    const e = getValue(end)
    return `@media (min-width:${s}${unit}) and (max-width:${e}${unit})`
  }

  // TODO memo 化, useScreenSize に依存するとテスト書きにくい
  const { screenSize } = useScreenSize()
  function getBreakpointKey(width: number): BreakpointKey {
    if (width < values.sm) {
      return 'xs'
    }
    if (width < values.md) {
      return 'sm'
    }
    if (width < values.lg) {
      return 'md'
    }
    if (width < values.xl) {
      return 'lg'
    }
    return 'xl'
  }
  const breakpointKey = getBreakpointKey(screenSize.width)

  return {
    less,
    up,
    down,
    between,
    breakpointKey,
  }
}
