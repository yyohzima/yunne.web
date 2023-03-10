import useBreakpoints from './useBreakpoints'

describe('useBreakpoints', () => {
  describe('function: up', () => {
    it('should work for xs', () => {
      expect(useBreakpoints().up('xs')).toBe('@media (min-width:0px)')
    })
    it('should work for md', () => {
      expect(useBreakpoints().up('md')).toBe('@media (min-width:900px)')
    })
    it('should work for number', () => {
      expect(useBreakpoints().up(345)).toBe('@media (min-width:345px)')
    })
  })

  describe('function: down', () => {
    it('should work for xs', () => {
      expect(useBreakpoints().down('xs')).toBe('@media (max-width:0px)')
    })
    it('should work for md', () => {
      expect(useBreakpoints().down('md')).toBe('@media (max-width:900px)')
    })
    it('should work for number', () => {
      expect(useBreakpoints().down(345)).toBe('@media (max-width:345px)')
    })
  })

  describe('function: between', () => {
    it('should work, xs and md', () => {
      expect(useBreakpoints().between('xs', 'md')).toBe(
        '@media (min-width:0px) and (max-width:900px)',
      )
    })
    it('should work, number and number', () => {
      expect(useBreakpoints().between(123, 456)).toBe(
        '@media (min-width:123px) and (max-width:456px)',
      )
    })
  })

  describe('function: getBreakpointKey', () => {
    // TODO getBreakpointKey は useScreenSize に依存してる
  })
})
