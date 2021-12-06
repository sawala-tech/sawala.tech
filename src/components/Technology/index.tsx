import tw, { styled } from 'twin.macro'

import { Container } from '@/components/Layouts'
import Button from '@/components/Buttons'

const Background = styled.div`
  ${tw`bg-gray-50`}
`
const Content = styled.div`
  ${tw`flex items-center justify-between w-full py-16`}
`

const ContentLeft = styled.div`
  ${tw`w-1/3`}
`
const ContentLeftTop = styled.div`
  ${``}
`
const ContentLeftTopHead = styled.h1`
  ${tw`text-4xl font-bold`}
`
const ContentLeftTopSub = styled.p`
  ${tw`my-6 text-gray-500`}
`
const ContentLeftBot = styled.div`
  ${tw`mt-[2.875rem] grid grid-cols-2 grid-rows-3`}
`

const ContentRight = styled.div`
  ${tw`flex w-2/3 justify-evenly`}
`
const ContentRightHead = styled.h1`
  ${tw`mb-6 text-2xl font-bold`}
`
const ContentRightSub = styled.p`
  ${tw`text-gray-500`}
`
const ContentRightLeft = styled.div`
  ${tw`flex flex-col justify-start w-2/5 bg-[#F7FAFC] py-[3.125rem] px-6 rounded-md border-l-8 border-b-8`}
`
const ContentRightRight = styled.div`
  ${tw`flex flex-col justify-start w-2/5 bg-[#F7FAFC] py-[3.125rem] px-6 rounded-md border-r-8 border-t-8`}
`

export const Technology: React.FC = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <ContentLeft>
              <ContentLeftTop>
                <ContentLeftTopHead>
                  Technology<span tw="text-secondary">_</span>
                </ContentLeftTopHead>
                <ContentLeftTopSub>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat.
                </ContentLeftTopSub>
                <Button text="See More" variant="primary" tw="mt-6 rounded-full px-12" />
              </ContentLeftTop>
              <ContentLeftBot>
                <div>
                  <img src={'/assets/images/tech-left-1.png'} />
                </div>
                <div>
                  <img src={'/assets/images/tech-left-4.png'} />
                </div>
                <div>
                  <img src={'/assets/images/tech-left-2.png'} />
                </div>
                <div>
                  <img src={'/assets/images/tech-left-5.png'} />
                </div>
                <div>
                  <img src={'/assets/images/tech-left-3.png'} />
                </div>
                <div>
                  <img src={'/assets/images/tech-left-6.png'} />
                </div>
              </ContentLeftBot>
            </ContentLeft>
            <ContentRight>
              <ContentRightLeft>
                <ContentRightHead>Full-stack JavaScript</ContentRightHead>
                <ContentRightSub>
                  Bahasa utama untuk pengembangan kami berbasis JavaScript.
                  <br />
                  <ul tw="list-outside ml-4 list-disc my-5 text-[#3B82F6]">
                    <li>
                      <span tw="text-gray-500">Node untuk pengembangan backend/API</span>{' '}
                    </li>
                    <li>
                      <span tw="text-gray-500"> React untuk membangun antarmuka/front-end</span>
                    </li>
                  </ul>
                  PHP dan Python digunakan sebagai bahasa kedua (secondary) untuk mendukung pengembangan dengan kebutuhan
                  khusus.
                </ContentRightSub>
              </ContentRightLeft>
              <ContentRightRight>
                <ContentRightHead>Framework Library Pendukung</ContentRightHead>
                <ContentRightSub>
                  Adapun framework/library yang digunakan:
                  <ul tw="list-outside ml-4 list-disc my-5 text-[#3B82F6]">
                    <li>
                      <span tw="text-gray-500">Strapi sebagai headless Content Management System (CMS) utama.</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">
                        Express sebagai framework untuk membangun Application Programming Interface (API).
                      </span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Next Js untuk membangun antarmuka/frontend</span>
                    </li>
                    <li>
                      <span tw="text-gray-500">Laravel untuk framework berbasis PHP</span>
                    </li>
                  </ul>
                </ContentRightSub>
              </ContentRightRight>
            </ContentRight>
          </Content>
        </Container>
      </Background>
    </>
  )
}
