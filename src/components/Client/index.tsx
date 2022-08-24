import ClienCard from '@/components/Card/Client'
import { Container } from '@/components/Layouts'
import Button from '@components/Buttons'
import dataClient from '@jsons/client.json'
import tw, { styled } from 'twin.macro'
import { Element } from 'react-scroll'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full pt-16 pb-16 lg:pb-[5.625rem] text-center`}
`
const ContentHead = styled.h1`
  ${tw`text-3xl font-bold lg:text-4xl mb-7`}
`
const Contentsub = styled.div`
  ${tw`text-gray-500 md:px-44 lg:px-44`}
`
const ContentGalery = styled.div`
  ${tw`lg:w-10/12 sm:px-5 mt-[3.75rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-4`}
`
const ContentGaleryItems = styled.div`
  ${tw`h-[5rem] lg:h-[7rem] w-full border rounded shadow flex justify-center items-center p-5 cursor-pointer hover:bg-blue-300`}
`

export const Client: React.FC = () => {
  return (
    <>
      <Element name="client" className="element">
        <Container>
          <Content>
            <ContentHead>
              Featured Clients<span tw="text-secondary">_</span>
            </ContentHead>
            <Contentsub>
              Kami telah dipercaya perusahaan nasional dan internasional untuk mengembangkan, mengelola dan memelihara
              software/sistem informasi mereka.
            </Contentsub>
            <ContentGalery>
              {dataClient.map((dataClient: { thumb: string }, i: number) => (
                <ContentGaleryItems key={i}>
                  <ClienCard image={dataClient.thumb}></ClienCard>
                </ContentGaleryItems>
              ))}
            </ContentGalery>
            <Button text="More Client" tw="hidden rounded-full px-12 mt-10"></Button>
          </Content>
        </Container>
      </Element>
    </>
  )
}
