import { HeroDesa, AboutDesa } from '@/components/Chunks/Desa'
import { Navbar } from '@/components/Navbar'

const Desa = () => {
  return (
    <>
      <Navbar withScrolled={false} />
      <HeroDesa />
      <AboutDesa />
    </>
  )
}

export default Desa
