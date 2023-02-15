import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useRef } from 'react'
import styled from '@emotion/styled'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import NextImage from 'next/image'
import { Pagination } from 'swiper'

import useBreakpoints, {
  BreakpointKey,
} from '@/components/hooks/useBreakpoints'

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
const SwiperContainer = styled.div`
  width: 100%;
`

const BannersPagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  gap: 0 10px;

  > span.swiper-pagination-bullet {
    background-color: #000;
    height: 10px;
    width: 10px;
    margin: 0;
    padding: 0;
  }
`

type StyledSwiperSlideProps = {
  width: number
  height: number
}

const StyledSwiperSlide = styled(SwiperSlide)<StyledSwiperSlideProps>(
  (props) => ({
    width: props.width,
    height: props.height,
    objectFit: 'contain',
  }),
)

const slideImages = [
  {
    src: '/img/buncho.1.jpg',
    alt: 'buncho.1.jpg',
  },
  {
    src: '/img/buncho.2.jpg',
    alt: 'buncho.2.jpg',
  },
  {
    src: '/img/buncho.3.jpg',
    alt: 'buncho.3.jpg',
  },
  {
    src: '/img/buncho.4.jpg',
    alt: 'buncho.4.jpg',
  },
  {
    src: '/img/buncho.5.jpg',
    alt: 'buncho.5.jpg',
  },
]

function About() {
  // TODO memoize
  const { breakpointKey } = useBreakpoints()
  const slideImageSize = (key: BreakpointKey) => {
    if (key === 'xl') {
      return {
        width: 750,
        height: 394,
      }
    }
    if (key === 'lg') {
      return {
        width: 750 * 0.8,
        height: 394 * 0.8,
      }
    }
    if (key === 'md') {
      return {
        width: 750 * 0.6,
        height: 394 * 0.6,
      }
    }
    if (key === 'sm') {
      return {
        width: 750 * 0.4,
        height: 394 * 0.4,
      }
    }
    return {
      width: 750 * 0.2,
      height: 394 * 0.2,
    }
  }
  const imageSize = slideImageSize(breakpointKey)
  const sizes = [
    '(max-width: 600px) 150px',
    '(max-width: 900px) 300px',
    '(max-width: 1200px) 450px',
    '(max-width: 1536px) 600px',
    '750px',
  ].join(',')

  const bannersPagination = useRef<HTMLDivElement>(null)

  return (
    <Container>
      <SwiperContainer>
        <Swiper
          modules={[Pagination]}
          slidesPerView='auto'
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: bannersPagination.current,
          }}
          autoplay
          effect='flip'
          onSlideChange={() => {}}
          onSwiper={() => {}}
        >
          {slideImages.map((item) => (
            <StyledSwiperSlide
              key={item.src}
              width={imageSize.width}
              height={imageSize.height}
            >
              <NextImage src={item.src} alt={item.alt} fill sizes={sizes} />
            </StyledSwiperSlide>
          ))}
        </Swiper>
        <BannersPagination ref={bannersPagination} />
      </SwiperContainer>
      <GridContainer>
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
      </GridContainer>
    </Container>
  )
}

export default About
