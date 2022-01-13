import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { Element } from 'react-scroll'

const Background = styled.div`
  ${tw`bg-gray-50`}
`
const Content = styled.div`
  ${tw`p-4 mt-8 sm:mt-0 flex flex-col lg:flex-row items-center justify-between w-full lg:px-0 lg:py-16`}
`

const ContentLeft = styled.div`
  ${tw`lg:flex lg:flex-col sm:grid sm:grid-cols-2 sm:gap-3 lg:w-1/3`}
`
const ContentLeftTop = styled.div`
  ${``}
`
const ContentLeftTopHead = styled.h1`
  ${tw`text-3xl lg:text-4xl font-bold`}
`
const ContentLeftTopSub = styled.p`
  ${tw`my-6 text-gray-500`}
`
const ContentBottomSub = styled.div`
  ${tw`flex flex-col items-center sm:hidden mb-6 text-gray-500`}
`
const ContentBottomtBot = styled.div`
  ${tw`justify-items-center block sm:hidden  grid grid-cols-2 gap-2`}
`
const ContentLeftBot = styled.div`
  ${tw`py-10 lg:py-0 lg:mt-[2.875rem] justify-items-center hidden sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-rows-3`}
`
const ContentRight = styled.div`
  ${tw`space-y-5 py-5 sm:space-y-0 flex-col sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-row lg:w-2/3 justify-evenly`}
`
const ContentRightHead = styled.h1`
  ${tw`mb-6 text-2xl font-bold`}
`
const ContentRightSub = styled.div`
  ${tw`text-gray-500`}
`
const ContentRightLeft = styled.div`
  ${tw`relative flex flex-col justify-start lg:w-2/5 bg-[#F7FAFC] py-[3.125rem] px-6`}
  div:before {
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    border-radius:8px; 
    padding-left:10px;
    padding-bottom:10px;
    background:linear-gradient(90deg, #0161e7 -3.51%, #fc0c47 46%, #f68f11 75.16%, #fb0246 102.12%); 
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out; 
    mask-composite: exclude; 
`
const ContentRightRight = styled.div`
  ${tw`relative flex flex-col justify-start lg:w-2/5 bg-[#F7FAFC] py-[3.125rem] px-6`}
  div:before {
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    border-radius:8px; 
    padding-right:10px;
    padding-top:10px;
    background:linear-gradient(90deg, #0161e7 -3.51%, #fc0c47 46%, #f68f11 75.16%, #fb0246 102.12%); 
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out; 
    mask-composite: exclude; 
`
const Ul = styled.ul`
  ${tw`list-outside ml-4 list-disc my-5 text-[#3B82F6]`}
`
export const Technology: React.FC = () => {
  return (
    <>
      <Element name="technology" className="element">
        <Background>
          <Container tag={'div'} tw="px-0 sm:p-5 md:p-10">
            <Content>
              <ContentLeft>
                <ContentLeftTop>
                  <ContentLeftTopHead>
                    Technology<span tw="text-secondary">_</span>
                  </ContentLeftTopHead>
                  <ContentLeftTopSub>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat.
                    <Button text="See More" variant="primary" tw="hidden sm:block mt-6 rounded-full px-12" />
                  </ContentLeftTopSub>
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
                    <Ul>
                      <li>
                        <span tw="text-gray-500">Node untuk pengembangan backend/API</span>{' '}
                      </li>
                      <li>
                        <span tw="text-gray-500"> React untuk membangun antarmuka/front-end</span>
                      </li>
                    </Ul>
                    PHP dan Python digunakan sebagai bahasa kedua (secondary) untuk mendukung pengembangan dengan kebutuhan
                    khusus.
                  </ContentRightSub>
                </ContentRightLeft>
                <ContentRightRight>
                  <ContentRightHead>Framework Library Pendukung</ContentRightHead>
                  <ContentRightSub>
                    Adapun framework/library yang digunakan:
                    <Ul>
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
                    </Ul>
                  </ContentRightSub>
                </ContentRightRight>
              </ContentRight>
              <ContentBottomSub>
                <ContentBottomtBot>
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
                </ContentBottomtBot>
                <Button text="See More" variant="primary" tw="sm:hidden block mt-6 rounded-full px-12" />
              </ContentBottomSub>
            </Content>
          </Container>
        </Background>
      </Element>
    </>
  )
}
