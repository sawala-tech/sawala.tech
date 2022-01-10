import Link from 'next/link'
import { FC } from 'react'
interface ClientProps {
  slug: string
  image: string
}

const Client: FC<ClientProps> = ({ slug, image }) => (
  <>
    <Link href={`/client/${slug}`} passHref>
      <img src={image} />
    </Link>
  </>
)

export default Client
