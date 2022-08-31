import { Element } from 'react-scroll'
import { Fragment } from 'react'
import tw, { styled } from 'twin.macro'
import dataSolution from '@jsons/solution.json'
import SolutionCard from '@/components/Card/Solution'
import { Container } from '@/components/Layouts'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full text-center`}
`
const ContentHead = styled.h1`
  ${tw`mt-20 mb-16 text-3xl font-bold lg:text-4xl`}
`
const ContentSolutionWrapper = styled.div`
  ${tw`grid grid-cols-1 gap-2 mx-auto gap-y-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3 mb-14`}
`

export const Solution: React.FC = () => {
  return (
    <>
      <Element name="solution" className="element">
        <Container tag={'div'} tw="px-5 md:px-14">
          <Content>
            <ContentHead>
              Solutions<span tw="text-secondary">_</span>
            </ContentHead>
            <ContentSolutionWrapper>
              {dataSolution.map((data: any, i: number) => (
                <Fragment key={i}>
                  <SolutionCard key={i} image={data?.icon} title={data?.title} subtitle={data?.subtitle} />
                </Fragment>
              ))}
            </ContentSolutionWrapper>
          </Content>
        </Container>
      </Element>
    </>
  )
}
