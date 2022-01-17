import { FC } from 'react'
interface ClientProps {
  image: string
}

const Client: FC<ClientProps> = ({ image }) => (
  <>
    <img src={image} />
  </>
)

export default Client
