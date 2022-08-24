import Image from 'next/image'
import { FC } from 'react'
interface SolutionProps {
  image: string
}

const Solution: FC<SolutionProps> = ({ image }) => (
  <>
    <Image unoptimized={true} src={image} layout="fixed" width={140} height={65} objectFit="contain" />
  </>
)

export default Solution
