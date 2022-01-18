import { Link } from 'react-scroll'
import { styled } from 'twin.macro'
const NavLinks = styled(Link)`
  color: white;
  &.active {
    font-weight: 700;
    border-bottom: 4px solid #ef4444;
  }
`
import { FC } from 'react'
interface LinkProps {
  to: string
  title: string
  onClick: any
  offset: number
}

const Links: FC<LinkProps> = ({ to, title, onClick, offset }) => (
  <>
    <NavLinks
      activeClass="active"
      offset={offset}
      to={to}
      spy={true}
      smooth={true}
      duration={300}
      onClick={onClick}
      className="cursor-pointer">
      {title}
    </NavLinks>
  </>
)

export default Links
