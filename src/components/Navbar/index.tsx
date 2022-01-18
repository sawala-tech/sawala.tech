import { Container } from '@/components/Layouts'
import { DefaultModal } from '@/components/Modal/Default'
import { useEffect, useState } from 'react'
import 'twin.macro'
import Image from 'next/image'
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
          scrolled
            ? 'bg-white py-3 lg:py-5 shadow-md transition-all duration-700'
            : 'transition-all duration-500 py-5 lg:py-10'
        }`}>
        <Container tag="nav" tw="flex items-center justify-between">
          <div tw="relative w-[150px] h-auto flex justify-start p-5">
            <Image src={'/assets/images/logo-sawala-tech.svg'} layout={'fill'} />
          </div>
          <div tw="relative w-auto h-auto flex justify-end p-4">
            <Image src={'/assets/icons/navbar.svg'} onClick={() => setOpen(true)} className="cursor-pointer" layout="fill" />
          </div>
        </Container>
      </header>
      <DefaultModal open={open} closeButton={true} onClose={() => setOpen(false)}></DefaultModal>
    </>
  )
}
