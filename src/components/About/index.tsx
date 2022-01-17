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
