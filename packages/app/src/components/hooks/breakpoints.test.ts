import breakpoints from './breakpoints'

describe('breakpoints', () => {
  describe('function: up', () => {
    it('should work for xs', () => {
      expect(breakpoints().up('xs')).toBe('@media (min-width:0px)')
    })
    it('should work for md', () => {
      expect(breakpoints().up('md')).toBe('@media (min-width:900px)')
    })
    it('should work for number', () => {
      expect(breakpoints().up(345)).toBe('@media (min-width:345px)')
    })
  })

  describe('function: down', () => {
    it('should work for xs', () => {
      expect(breakpoints().down('xs')).toBe('@media (max-width:0px)')
    })
    it('should work for md', () => {
      expect(breakpoints().down('md')).toBe('@media (max-width:900px)')
    })
    it('should work for number', () => {
      expect(breakpoints().down(345)).toBe('@media (max-width:345px)')
    })
  })

  describe('function: between', () => {
    it('should work, xs and md', () => {
      expect(breakpoints().between('xs', 'md')).toBe(
        '@media (min-width:0px) and (max-width:900px)',
      )
    })
    it('should work, number and number', () => {
      expect(breakpoints().between(123, 456)).toBe(
        '@media (min-width:123px) and (max-width:456px)',
      )
    })
  })
})
