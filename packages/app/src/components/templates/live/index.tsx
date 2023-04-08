import React, { useEffect } from 'react'
import styled from '@emotion/styled'

type BoxProps = {
  primary?: boolean
}

const Box = styled.div((props: BoxProps) => ({
  display: 'grid',
  backgroundColor:
    props.primary !== undefined && !props.primary ? '#121212' : '#fff',
}))

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  grid-auto-rows: minmax(60px, auto);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

function Live() {
  useEffect(() => {
    const chatResource = new EventSource('http://localhost:1323/rooms/chat', {})

    chatResource.addEventListener('open', (e: Event) => {
      console.log('SSE opened!, ', e)
    })
    chatResource.addEventListener('message', (e: MessageEvent) => {
      console.log('messageEvent: ', e)
    })
    chatResource.addEventListener('error', (e: Event) => {
      console.error('error.event: ', e)
      chatResource.close()
    })

    return () => {
      chatResource.close()
      chatResource.removeEventListener('open', () => {})
      chatResource.removeEventListener('message', () => {})
      chatResource.removeEventListener('error', () => {})
    }
  }, [])

  return (
    <Container>
      <GridContainer>
        <Box>
          <span>One</span>
        </Box>
      </GridContainer>
    </Container>
  )
}

export default Live
