import Image from 'next/image'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'
import { FC, useEffect, useState } from 'react'

const ContentTeam = styled.div`
  ${tw`pl-5 flex w-full h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-200 bg-gray-50 rounded-xl place-items-center`}
`
const Title = styled.div`
  ${tw`flex-1 text-xl font-bold text-left text-gray-900 capitalize pl-7`}
`
const SubTitle = styled.div`
  ${tw`text-base font-medium text-gray-500 pb-7`}
`

interface TeamProps {
  image: string
  name: string
  about: string
  link: string
}

const Team: FC<TeamProps> = ({ image, name, about, link }) => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <ContentTeam>
      <Image
        unoptimized={true}
        src={image}
        layout="fixed"
        width={isDesktop ? 140 : 100}
        height={isDesktop ? 140 : 100}
        objectFit="contain"
      />
      <Title>
        {name}
        <SubTitle>{about}</SubTitle>

        <Link href={link}>
          <Image
            tw="cursor-pointer"
            unoptimized={true}
            src="/assets/icons/linkedin.png"
            layout="fixed"
            width={30}
            height={30}
          />
        </Link>
      </Title>
    </ContentTeam>
  )
}

export default Team
