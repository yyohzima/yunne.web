export type BreakpointValues = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}
export type BreakpointKey = keyof BreakpointValues
export type Breakpoint = BreakpointKey | number

export default function breakpoints() {
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

  return {
    less,
    up,
    down,
    between,
  }
}
