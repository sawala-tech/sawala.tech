import { Container } from '@/components/Layouts'
import tw, { styled } from 'twin.macro'
import { Element } from 'react-scroll'
import Image from 'next/image'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full text-center`}
`

const ContentHead = styled.h1`
  ${tw`mt-20 mb-16 text-3xl font-bold lg:text-4xl`}
`

const ContentSolution = styled.div`
  ${tw`grid grid-cols-1 gap-2 mx-auto gap-y-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 mb-14`}
`

export const Solution: React.FC = () => {
  const data = [
    {
      icon: '/assets/images/solution-1.png',
      title: 'learning management system',
      subtitle: 'Bahasa utama untuk pengembangan kami berbasis JavaScript.'
    },
    {
      icon: '/assets/images/solution-2.png',
      title: 'community platform',
      subtitle: 'Bahasa utama untuk pengembangan kami berbasis JavaScript.'
    },
    {
      icon: '/assets/images/solution-3.png',
      title: 'conversional al',
      subtitle: 'Bahasa utama untuk pengembangan kami berbasis JavaScript.'
    },
    {
      icon: '/assets/images/solution-4.png',
      title: 'cloud transformation',
      subtitle: 'Bahasa utama untuk pengembangan kami berbasis JavaScript.'
    },
    {
      icon: '/assets/images/solution-5.png',
      title: 'e commerce',
      subtitle: 'Bahasa utama untuk pengembangan kami berbasis JavaScript.'
    },
    {
      icon: '/assets/images/solution-6.png',
      title: 'website profile',
      subtitle: 'Bahasa utama untuk pengembangan kami berbasis JavaScript.'
    }
  ]
  return (
    <>
      <Element name="about" className="element">
        <Container tag={'div'} tw="px-5 md:px-14">
          <Content>
            <ContentHead>
              Solutions<span tw="text-secondary">_</span>
            </ContentHead>

            <ContentSolution>
              {data?.map((item, i) => (
                <div
                  tw="items-center justify-center max-w-[381px] max-h[246px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-200 bg-gray-50 rounded-xl py-11"
                  key={i}>
                  <Image src={`${item.icon}`} alt="" width={49} height={45}></Image>
                  <h2 tw="pt-3 text-xl font-bold capitalize text-gray-900 md:px-1">{item.title}</h2>
                  <p tw="mx-10 font-normal text-base text-gray-500 px-2 md:p-0 lg:px-2">{item.subtitle}</p>
                </div>
              ))}
            </ContentSolution>
          </Content>
        </Container>
      </Element>
    </>
  )
}
