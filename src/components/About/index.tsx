import tw, { styled } from 'twin.macro'

import { Container } from '@/components/Layouts'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full pt-16 pb-[5.625rem] px-72 text-center`}
`

const ContentHead = styled.h1`
  ${tw`text-4xl font-bold mb-7`}
`

const Contentsub = styled.p`
  ${tw`text-gray-500`}
`

export const About: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <ContentHead>
            About<span tw="text-secondary">_</span>
          </ContentHead>
          <Contentsub>
            PT Sawala Innovation Indonesia (SAWALA Technology) is a software development company. With the main expertise in
            developing web and cloud technology-based information systems. Apart from working on software/information systems
            according to client needs, SAWALA is also an official sales partner of Google Workspace/Suite, DigitalOcean,
            LivePerson and Amazon Web Services (AWS) in Indonesia.
          </Contentsub>
        </Content>
      </Container>
    </>
  )
}
