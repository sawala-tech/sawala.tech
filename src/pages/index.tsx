import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Service } from '@/components/Service'
import { Formulir } from '@/components/Formulir'

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Formulir />
    </>
  )
}

export default LandingPage
