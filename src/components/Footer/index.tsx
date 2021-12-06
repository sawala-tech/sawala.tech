import tw, { styled } from 'twin.macro'

import { Container } from '@/components/Layouts'

const Background = styled.div`
  ${tw`w-full`}
  background: linear-gradient(90deg, rgba(1, 97, 231, 0.05) -3.51%, rgba(252, 12, 71, 0.05) 46%, rgba(246, 143, 17, 0.05) 75.16%, rgba(251, 2, 70, 0.05) 102.12%);
`

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full pt-[6.25rem] pb-12 px-72 text-center`}
`

export const Footer: React.FC = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <div tw="flex justify-evenly w-full text-gray-500">
              <a href="#">Home</a>
              <a href="#">Service</a>
              <a href="#">Product</a>
              <a href="#">Case Study</a>
              <a href="#">Technology</a>
              <a href="#">About</a>
              <a href="#">Contact Us</a>
            </div>
            <div tw="flex justify-evenly w-3/12 text-gray-500 my-8">
              <a href="#">
                <img src={'/assets/icons/facebook.png'} />
              </a>
              <a href="#">
                <img src={'/assets/icons/instagram.png'} />
              </a>
              <a href="#">
                <img src={'/assets/icons/linked.png'} />
              </a>
            </div>
            <p tw="text-gray-400">© 2022 PT Sawala Inovasi Indonesia. All rights reserved.</p>
          </Content>
        </Container>
      </Background>
    </>
  )
}
