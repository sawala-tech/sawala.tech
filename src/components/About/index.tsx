import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { Element } from 'react-scroll'

const Content = styled.div`
  ${tw`flex px-5 flex-col items-center justify-between w-full py-10 lg:px-24 text-center`}
`

const ContentHead = styled.h1`
  ${tw`text-3xl lg:text-4xl font-bold mb-7`}
`

const Contentsub = styled.p`
  ${tw`lg:text-lg xl:text-xl text-gray-500`}
`

export const About: React.FC = () => {
  return (
    <>
      <Element name="about" className="element">
        <Container tag={'div'} tw="px-0 sm:p-5 md:p-10">
          <Content>
            <ContentHead>
              About<span tw="text-secondary">_</span>
            </ContentHead>
            <Contentsub>
              PT Sawala Innovation Indonesia (SAWALA Technology) is a software development company. With the main expertise
              in developing web and cloud technology-based information systems. Apart from working on software/information
              systems according to client needs, SAWALA is also an official sales partner of Google Workspace/Suite,
              DigitalOcean, LivePerson and Amazon Web Services (AWS) in Indonesia.
            </Contentsub>
          </Content>
        </Container>
      </Element>
    </>
  )
}
