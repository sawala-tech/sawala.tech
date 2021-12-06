import tw, { styled } from 'twin.macro'

import { Container } from '@/components/Layouts'
import Button from '@/components/Buttons'

const Background = styled.div`
  ${tw`w-full bg-primary`}
`
const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full py-[5.125rem]  text-center`}
`

const ContentHead = styled.h1`
  ${tw`text-4xl font-bold text-white mb-7`}
`

export const Contact: React.FC = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <ContentHead>Let's work together, it will be mutually beneficial</ContentHead>
            <Button text="Contact Us" variant="secondary" tw="font-semibold mt-6 rounded-full px-6" />
          </Content>
        </Container>
      </Background>
    </>
  )
}
