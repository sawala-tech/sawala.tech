import { Container } from '@components/Layouts'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'
const Heading = styled.h1`
  ${tw`h-full pb-2 text-3xl font-bold text-gray-600 lg:text-5xl`}
  background: linear-gradient(90deg, #0161E7 -3.51%, #FC0C47 46%, #F68F11 75.16%, #FB0246 102.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-text-stroke: 1.5px black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Main = styled.div`
  ${tw`relative flex items-center w-full h-screen overflow-hidden bg-no-repeat bg-cover py-7 md:py-4 bg-hero-desa lg:py-36`}
  @media (max-width:640px) {
    background-image: none;
  }
`

export const HeroDesa: React.FC = () => {
  return (
    <>
      <Main>
        <Container>
          <div tw="flex flex-col space-y-5 w-1/2">
            <Image src={'/assets/images/logodesa.png'} layout={'fixed'} width={86} height={71} />
            <Heading>Desa Langonsari</Heading>
            <p>
              Jl. Cibiuk No. 67a, Kecamatan Pameungpeuk Kabupaten Bandung, <br />
              Provinsi Jawa Barat, Kode Pos 40376
            </p>
            <div tw="flex space-x-3">
              <div tw="flex space-x-2 items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.231 15.26L16.691 14.97C16.3924 14.9349 16.0896 14.968 15.8056 15.0667C15.5215 15.1654 15.2635 15.3273 15.051 15.54L13.211 17.38C10.3722 15.9362 8.0648 13.6288 6.62102 10.79L8.47102 8.94001C8.90102 8.51001 9.11102 7.91001 9.04102 7.30001L8.75102 4.78001C8.69432 4.29219 8.46021 3.84225 8.09325 3.51586C7.7263 3.18947 7.25212 3.00943 6.76102 3.01001H5.03102C3.90102 3.01001 2.96102 3.95001 3.03102 5.08001C3.56102 13.62 10.391 20.44 18.921 20.97C20.051 21.04 20.991 20.1 20.991 18.97V17.24C21.001 16.23 20.241 15.38 19.231 15.26V15.26Z"
                    fill="#236AF2"
                  />
                </svg>
                <p tw="text-gray-700 text-lg">02287800000</p>
              </div>
              <div tw="flex space-x-2 items-center">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.5 4H4.5C3.4 4 2.5 4.9 2.5 6V18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.1 8.25L13.56 12.34C12.91 12.75 12.09 12.75 11.44 12.34L4.9 8.25C4.79973 8.19371 4.71192 8.11766 4.64189 8.02645C4.57186 7.93525 4.52106 7.83078 4.49258 7.71937C4.46409 7.60796 4.4585 7.49194 4.47616 7.37831C4.49381 7.26468 4.53434 7.15581 4.59528 7.0583C4.65623 6.96079 4.73632 6.87666 4.83073 6.811C4.92513 6.74533 5.03187 6.69951 5.1445 6.6763C5.25712 6.65309 5.37328 6.65297 5.48595 6.67595C5.59863 6.69893 5.70546 6.74453 5.8 6.81L12.5 11L19.2 6.81C19.2945 6.74453 19.4014 6.69893 19.514 6.67595C19.6267 6.65297 19.7429 6.65309 19.8555 6.6763C19.9681 6.69951 20.0749 6.74533 20.1693 6.811C20.2637 6.87666 20.3438 6.96079 20.4047 7.0583C20.4657 7.15581 20.5062 7.26468 20.5238 7.37831C20.5415 7.49194 20.5359 7.60796 20.5074 7.71937C20.4789 7.83078 20.4281 7.93525 20.3581 8.02645C20.2881 8.11766 20.2003 8.19371 20.1 8.25Z"
                    fill="#236AF2"
                  />
                </svg>
                <p tw="text-gray-700 text-lg">info@langonsari.id</p>
              </div>
              <div tw="flex space-x-2 items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
                    fill="#236AF2"
                  />
                </svg>
                <p tw="text-gray-700 text-lg">www.langonsari.id</p>
              </div>
            </div>
          </div>
          <img src={'/assets/images/desa.png'} tw="absolute top-20 -right-20" />
        </Container>
      </Main>
    </>
  )
}
