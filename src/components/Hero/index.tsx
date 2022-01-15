import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import { Navbar } from '@/components/Navbar'
import { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import { Link, Element } from 'react-scroll'

const Background = styled.div`
  ${tw`flex items-center w-full lg:h-screen bg-cover bg-hero-background bg-[#EFF6FF] bg-opacity-80 backdrop-blur-lg`}
`

const Content = styled.div`
  ${tw`flex space-y-10 flex-col-reverse items-center justify-between w-full lg:flex-row`}
`
const ContentText = styled.div`
  ${tw`px-5 md:w-5/6 lg:w-[59%] md:px-5 lg:px-0`}
`
const ContentTextHead = styled.p`
  ${tw`h-auto pt-7 pb-5 lg:pb-8 lg:mb-2 font-bold text-2xl md:text-3xl lg:text-5xl`}
  background: linear-gradient(90deg,#0161E7 -3.51%, #FC0C47 46%, #F68F11 75.16%, #FB0246 102.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const ContentTextSub = styled.p`
  ${tw`lg:pr-16 lg:text-xl text-gray-500 `}
`
const ContentImage = styled.div`
  ${tw`items-center lg:w-2/5 lg:pr-2 w-full flex justify-center`}
`

export const Hero: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Navbar />

      <Element name="home" className="element">
        <Background>
          <Container tag={'div'} tw="px-0 py-[2rem] sm:py-0">
            <Content>
              <ContentText>
                <ContentTextHead>Accelerate good things with technology</ContentTextHead>
                <ContentTextSub>
                  From social entrepreneurs to international organizations - they have been trusted us to provide technology
                  services for their impact-driven efforts.
                </ContentTextSub>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={300}>
                  <Button text="Learn More" variant="primary" tw="mt-6 rounded-full px-8" />
                </Link>
              </ContentText>
              <ContentImage>
                <img
                  src={isDesktop ? '/assets/images/hero-image.png' : '/assets/images/image-4.png'}
                  className={isDesktop ? 'rounded-full' : ''}
                />
              </ContentImage>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
