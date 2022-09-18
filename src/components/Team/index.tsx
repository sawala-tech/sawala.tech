import { Fragment } from 'react'
import { Element } from 'react-scroll'
import dataFounder from '@jsons/founder.json'
import dataTeam from '@jsons/team.json'
import Button from '@/components/Buttons'
import FounderCard from '@/components/Card/Founder'
import TeamCard from '@/components/Card/Team'
import { Container } from '@/components/Layouts'

export const Team: React.FC = () => {
  return (
    <>
      <Element name="team" className="element">
        <Container tag={'div'} tw="px-5 md:px-14">
          <div tw="flex flex-col items-center justify-between w-full text-center">
            <h1 tw="mt-20 mb-16 text-3xl font-bold lg:text-4xl">
              Our Team<span tw="text-secondary">_</span>
            </h1>

            <div className="grid grid-cols-1 gap-4 mb-24 md:grid-cols-2 lg:grid-cols-3">
              {dataTeam.map((data: any, i: number) => (
                <Fragment key={i}>
                  <TeamCard key={i} image={data?.image} name={data?.name} about={data?.about} link={data?.link} />
                </Fragment>
              ))}

              <div tw="place-items-center p-4 hidden md:flex w-full h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 bg-blue-400 duration-200 rounded-xl">
                <div className="p-4 text-xl font-medium text-left text-white">
                  <p tw="w-11/12">Accelerate good things with technology</p>
                  <Button
                    text="Meet entire team"
                    variant="secondary"
                    tw="rounded-md px-5 mt-12 font-medium text-base py-2 text-opacity-70"
                    external={true}
                    url="https://wa.link/4l62ek"
                  />
                </div>
              </div>

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

              <div tw="place-items-center p-4 flex md:hidden w-full h-[220px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 bg-blue-400 duration-200 rounded-xl">
                <div className="p-4 text-xl font-medium text-left text-white">
                  <p tw="w-11/12">Accelerate good things with technology</p>
                  <Button
                    text="Meet entire team"
                    variant="secondary"
                    tw="rounded-md px-5 mt-12 font-medium text-base py-2 text-opacity-70"
                    external={true}
                    url="https://wa.link/4l62ek"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Element>
    </>
  )
}
