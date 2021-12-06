import tw, { styled } from 'twin.macro'

import { Container } from '@/components/Layouts'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full pt-16 pb-[5.625rem]  text-center`}
`

const ContentHead = styled.h1`
  ${tw`text-4xl font-bold mb-7`}
`
const Contentsub = styled.div`
  ${tw`text-gray-500 px-80`}
`
const ContentGalery = styled.div`
  ${tw`w-10/12 mt-[3.75rem] grid grid-cols-4 grid-rows-3 gap-4`}
`
const ContentGaleryItems = styled.div`
  ${tw`h-[7.875rem] w-full border rounded shadow`}
`

export const Client: React.FC = () => {
  return (
    <>
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
            <ContentGaleryItems>
              <img src={'/assets/images/client-1.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-2.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-3.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-4.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-5.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-6.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-7.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-8.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-9.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-10.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-11.png'} />
            </ContentGaleryItems>
            <ContentGaleryItems>
              <img src={'/assets/images/client-12.png'} />
            </ContentGaleryItems>
          </ContentGalery>
        </Content>
      </Container>
    </>
  )
}
