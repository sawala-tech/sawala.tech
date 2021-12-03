import tw, { styled } from 'twin.macro'

import { Container } from '@/components/Layouts'
import Button from '@/components/Buttons'

const Content = styled.div`
  ${tw`flex items-center justify-between w-full py-16`}
`

const ContentLeft = styled.h1`
  ${tw`w-1/2`}
`
const ContentLeftService = styled.h1`
  ${tw`w-11/12`}
`

const ContentRight = styled.p`
  ${tw`w-1/2`}
`

export const Service: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <ContentLeft>
            <ContentLeftService tw="mb-20">
              <p tw="text-secondary font-bold uppercase">Service</p>
              <p tw="text-primary font-bold text-4xl my-5">End-to-end Software Development</p>
              <p tw="text-gray-500 mb-5">
                Kami mengembangan sistem informasi berbasis website dari perencanaan hingga siap digunakan:
              </p>
              <ul tw="list-disc ml-5 text-primary">
                <li>
                  <span tw="text-gray-500"> UI/UX design</span>
                </li>
                <li>
                  <span tw="text-gray-500"> Application Programming Interface (API)</span>
                </li>
                <li>
                  <span tw="text-gray-500"> Front-end development</span>
                </li>
                <li>
                  <span tw="text-gray-500"> Deployment, CI/CD & cloud management</span>
                </li>
                <li>
                  <span tw="text-gray-500"> Perencanaan & dokumentasi teknis</span>
                </li>
              </ul>
            </ContentLeftService>
            <ContentLeftService>
              <p tw="text-secondary font-bold uppercase">Service</p>
              <p tw="text-primary font-bold text-4xl my-5">Cloud Reseller</p>
              <p tw="text-gray-500 mb-5">Kami adalah mitra penjualan untuk layanan cloud:</p>
              <ul tw="list-disc ml-5 text-primary">
                <li>
                  <span tw="text-gray-500"> LivePerson (AI-powered conversational cloud)</span>
                </li>
                <li>
                  <span tw="text-gray-500"> Amazon Web Service (AWS)</span>
                </li>
                <li>
                  <span tw="text-gray-500"> Google Workspace/Suite</span>
                </li>
                <li>
                  <span tw="text-gray-500"> DigitalOcean</span>
                </li>
              </ul>
            </ContentLeftService>

            <Button text="More Services" variant="primary" tw="mt-6 rounded-full px-8" />
          </ContentLeft>
          <ContentRight>Sisi 2</ContentRight>
        </Content>
      </Container>
    </>
  )
}
