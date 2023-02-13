import styled from '@emotion/styled'
import * as React from 'react'

type BoxProps = {
  primary?: boolean
}

const Box = styled.div((props: BoxProps) => ({
  display: 'grid',
  backgroundColor:
    props.primary !== undefined && !props.primary ? '#121212' : '#fff',
}))

type ContainerProps = {
  gridTemplateColumns?: string
  columnGap?: string
}

const Container = styled.div((props: ContainerProps) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '20px',
  rowGap: '20px',
  gridAutoRows: 'minmax(60px, auto)',
}))

const BaseLayout = styled.div()

// const Grid = styled.div`
//   display: grid;
// `

function About() {
  return (
    <Container>
      <Box>
        <span>One</span>
      </Box>
      <Box>
        <span>Two</span>
      </Box>
      <Box>
        <span>Three</span>
      </Box>
      <Box>
        <span>Four</span>
      </Box>
    </Container>
  )
}

export default About
