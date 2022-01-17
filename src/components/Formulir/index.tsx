import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import { Element } from 'react-scroll'
import tw, { styled } from 'twin.macro'

const Background = styled.div`
  ${tw`bg-right-bottom bg-no-repeat bg-primary bg-formulir-background`}
  background-size: auto;
  @media (max-width: 1024px) {
    background-size: 350px;
  }
`
const Content = styled.div`
  ${tw`flex flex-col items-start justify-between lg:w-[55%] pb-72 md:py-[4.5rem] text-white`}
`

const ContentHead = styled.h1`
  ${tw`mt-4 mb-5 text-3xl font-bold`}
`

const ContentSub = styled.p`
  ${tw`lg:w-10/12 mb-4 md:mb-8`}
`

export const Formulir: React.FC = () => {
  return (
    <>
      <Element name="product" className="element">
        <Background>
          <Container tag={'div'} tw="p-5 md:p-14">
            <Content>
              <img src={'/assets/images/formulir.png'} />
              <ContentHead>Formulir online serba bisa.</ContentHead>
              <ContentSub>
                Buat formulir pendaftaran, terima pembayaran dan otomatisasi banyak hal. <br /> <br />
                Formulir.id adalah Software as a Service (SaaS) berbasis cloud untuk membuat formulir online. Cocok digunakan
                untuk pendaftaran, penjualan kelas online dan produk lainnya. Dilengkapi berbagai fitur otomatisasi seperti
                invoice, integrasi dengan payment gateway dan aplikasi webinar dll.
              </ContentSub>
              <Button
                text="Contact Us"
                variant="secondary"
                tw="mt-6 rounded-full px-8"
                external={true}
                url="https://wa.link/mxjlln"
              />
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
