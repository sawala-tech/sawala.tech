import { Element } from 'react-scroll'
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
const ContentSolution = styled.div`
  ${tw`items-center justify-center max-w-[381px] max-h[246px] cursor-default transition ease-in-out delay-100 focus:outline-none hover:scale-110 hover:bg-primary hover:bg-opacity-10 duration-200 bg-gray-50 rounded-xl py-11`}
`

const Title = styled.div`
  ${tw`pt-3 text-xl font-bold text-gray-900 capitalize md:px-1`}
`
const SubTitle = styled.div`
  ${tw`px-2 mx-10 text-base font-normal text-gray-500 md:p-0 lg:px-2`}
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
              {dataSolution.map((dataSolution: { icon: string; title: string; subtitle: string }, i: number) => (
                <ContentSolution key={i}>
                  <SolutionCard image={dataSolution.icon}></SolutionCard>
                  <Title>{dataSolution.title}</Title>
                  <SubTitle>{dataSolution.subtitle}</SubTitle>
                </ContentSolution>
              ))}
            </ContentSolutionWrapper>
          </Content>
        </Container>
      </Element>
    </>
  )
}
