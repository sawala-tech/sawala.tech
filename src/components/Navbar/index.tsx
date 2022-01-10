import { Container } from '@/components/Layouts'
import { DefaultModal } from '@/components/Modal/Default'
import { useEffect, useState } from 'react'
import 'twin.macro'
import { Link } from 'react-scroll'
import { styled } from 'twin.macro'
const NavLinks = styled(Link)`
  color: white;
  &.active {
    font-weight: 700;
  }
  &.active span {
    border-bottom: 4px solid #ef4444;
  }
`

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY

    if (offset > 1) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-30 w-full ${
          scrolled ? 'bg-white py-3 lg:py-8 shadow-md transition-all duration-500' : ' py-5 lg:py-12'
        }`}>
        <Container tag="nav" tw="flex items-center justify-between">
          <img src={'/assets/images/logo.png'} />
          <img src={'/assets/icons/navbar.png'} onClick={() => setOpen(true)} className="cursor-pointer" />
        </Container>
      </header>
      <DefaultModal open={open} closeButton={true} onClose={() => setOpen(false)}>
        <div tw="flex flex-col space-y-8 text-white text-3xl transform translate-y-40">
          <NavLinks
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setOpen(false)}
            className="cursor-pointer">
            <span className="hover:border-b-4 hover:border-red-500">Home</span>
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setOpen(false)}
            className="cursor-pointer">
            <span className="hover:border-b-4 hover:border-red-500">About</span>
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setOpen(false)}
            className="cursor-pointer">
            <span className="hover:border-b-4 hover:border-red-500">Service</span>
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="product"
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setOpen(false)}
            className="cursor-pointer">
            <span className="hover:border-b-4 hover:border-red-500">Product</span>
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="casestudy"
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setOpen(false)}
            className="hidden">
            Case Study
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="technology"
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setOpen(false)}
            className="cursor-pointer">
            <span className="hover:border-b-4 hover:border-red-500">Technology</span>
          </NavLinks>
          <NavLinks
            activeClass="active"
            to="contactus"
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => setOpen(false)}
            className="cursor-pointer">
            <span className="hover:border-b-4 hover:border-red-500">Contact Us</span>
          </NavLinks>
        </div>
      </DefaultModal>
    </>
  )
}
