import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { Link } from 'react-scroll'

const Background = styled.div`
  ${tw`w-full`}
  background: linear-gradient(90deg, rgba(1, 97, 231, 0.05) -3.51%, rgba(252, 12, 71, 0.05) 46%, rgba(246, 143, 17, 0.05) 75.16%, rgba(251, 2, 70, 0.05) 102.12%);
`

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full py-8 md:pt-[6.25rem] md:pb-12 md:px-24 lg:px-72 text-center`}
`
export const Footer: React.FC = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <div tw="flex space-x-5 justify-center flex-wrap lg:justify-evenly w-full text-gray-400">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Home
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                About
              </Link>
              <Link
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Service
              </Link>
              <Link
                activeClass="active"
                to="product"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Product
              </Link>
              <Link activeClass="active" to="casestudy" spy={true} smooth={true} duration={300} className="hidden">
                Case Study
              </Link>
              <Link
                activeClass="active"
                to="technology"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Technology
              </Link>
              <Link
                activeClass="active"
                to="contactus"
                spy={true}
                smooth={true}
                duration={300}
                className="cursor-pointer hover:text-black">
                Contact Us
              </Link>
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
            <p tw="text-gray-400 px-5">© 2022 PT Sawala Inovasi Indonesia. All rights reserved.</p>
          </Content>
        </Container>
      </Background>
    </>
  )
}
