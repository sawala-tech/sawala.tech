import 'twin.macro'

import { Container } from '@/components/Layouts'

export const Navbar: React.FC = () => {
  return (
    <header tw="fixed top-0 z-30 w-full py-12">
      <Container tag="nav" tw="md:flex md:items-center md:justify-between">
        <img src={'/assets/images/logo.png'} />
        <img src={'/assets/icons/navbar.png'} />
      </Container>
    </header>
  )
}
