import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { Element } from 'react-scroll'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full px-5 py-10 text-center lg:px-24`}
`

const ContentHead = styled.h1`
  ${tw`text-3xl font-bold lg:text-4xl mb-7`}
`

const Contentsub = styled.p`
  ${tw`text-gray-500 lg:text-lg xl:text-xl`}
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
              Dirintis sejak tahun 2015 dan berdiri menjadi bisnis berbadan hukum pada tahun 2018. Selain mengerjakan
              software/sistem informasi sesuai kebutuhan klien, SAWALA juga merupakan mitra penjualan resmi Google
              Workspace/Suite, DigitalOcean, LivePerson dan Amazon Web Services (AWS) di Indonesia.
            </Contentsub>
          </Content>
        </Container>
      </Element>
    </>
  )
}
