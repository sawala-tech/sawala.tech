import { Element } from 'react-scroll'
import { Fragment } from 'react'
import tw, { styled } from 'twin.macro'
import dataTeam from '@jsons/team.json'
import dataFounder from '@jsons/founder.json'
import TeamCard from '@/components/Card/Team'
import FounderCard from '@/components/Card/Founder'
import Button from '@/components/Buttons'
import { Container } from '@/components/Layouts'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full text-center`}
`
const ContentHead = styled.h1`
  ${tw`mt-20 mb-16 text-3xl font-bold lg:text-4xl`}
`
const ContentTeamWrapper = styled.div`
  ${tw`grid grid-cols-1 mb-24 gap-x-5 md:gap-y-10 gap-y-4 md:grid-cols-2 lg:grid-cols-3`}
`
const ContentEntireTeam = styled.div`
  ${tw`place-items-center pl-5 flex w-[392px] h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 hover:bg-primary bg-blue-400 hover:bg-opacity-90 duration-200 rounded-xl`}
`
const SubContent = styled.div`
  ${tw`pl-5 pr-32 text-xl font-medium text-left text-white`}
`

export const Team: React.FC = () => {
  return (
    <>
      <Element name="team" className="element">
        <Container tag={'div'} tw="px-0 md:px-0">
          <Content>
            <ContentHead>
              Our Team<span tw="text-secondary">_</span>
            </ContentHead>

            <ContentTeamWrapper>
              {dataTeam.map((data: any, i: number) => (
                <Fragment key={i}>
                  <TeamCard key={i} image={data?.image} name={data?.name} about={data?.about} link={data?.link} />
                </Fragment>
              ))}

              <ContentEntireTeam>
                <SubContent>
                  Accelerate good things with technology
                  <Button
                    text="Meet entire team"
                    variant="secondary"
                    tw="rounded-md px-5 mt-12 font-medium text-base py-2 text-opacity-70"
                    external={true}
                    url="https://wa.link/4l62ek"
                  />
                </SubContent>
              </ContentEntireTeam>

              {dataFounder.map((data: any, i: number) => (
                <Fragment key={i}>
                  <FounderCard
                    key={i}
                    image={data?.image}
                    name={data?.name}
                    about={data?.about}
                    desc={data?.desc}
                    link={data?.link}
                  />
                </Fragment>
              ))}
            </ContentTeamWrapper>
          </Content>
        </Container>
      </Element>
    </>
  )
}
