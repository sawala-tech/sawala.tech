import tw, { styled } from 'twin.macro'

import { Container } from '@/components/Layouts'
import { Navbar } from '@/components/Navbar'
import Button from '@/components/Buttons'

const Background = styled.div`
  ${tw`flex items-center w-full h-screen bg-cover bg-hero-background`}
`

const Content = styled.div`
  ${tw`flex items-center justify-between w-full`}
`
const ContentText = styled.div`
  ${tw`w-3/5`}
`
const ContentTextHead = styled.p`
  ${tw`h-auto pb-8 pr-4 mb-2 font-medium text-7xl`}
  background: linear-gradient(90deg,#0161E7 -3.51%, #FC0C47 46%, #F68F11 75.16%, #FB0246 102.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const ContentTextSub = styled.p`
  ${tw`pr-16 text-xl text-gray-500 `}
`
const ContentImage = styled.div`
  ${tw`items-center w-2/5 pr-2`}
`

export const Hero: React.FC = () => {
  return (
    <>
      <Navbar />
      <Background>
        <Container>
          <Content>
            <ContentText>
              <ContentTextHead>Accelerate good things with technology</ContentTextHead>
              <ContentTextSub>
                From social entrepreneurs to international organizations - they have been trusted us to provide technology
                services for their impact-driven efforts.
              </ContentTextSub>
              <Button text="Learn More" variant="primary" tw="mt-6 rounded-full px-8" />
            </ContentText>
            <ContentImage>
              <img src={'/assets/images/hero-image.png'} tw="rounded-full" />
            </ContentImage>
          </Content>
        </Container>
      </Background>
    </>
  )
}
