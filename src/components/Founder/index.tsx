import { Container } from '@/components/Layouts'
import Link from 'next/link'
import tw, { styled } from 'twin.macro'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full pt-5 lg:pt-16 lg:pb-[5.625rem] text-left lg:text-center`}
`

const ContentHead = styled.h1`
  ${tw`text-3xl lg:text-4xl font-bold mb-7`}
`

const ContentGalery = styled.div`
  ${tw`flex flex-col -space-y-2 md:space-y-0 w-full mt-2 lg:mt-[3.75rem] md:grid md:grid-cols-2 lg:text-left`}
`
const ContentGaleryItems = styled.div`
  ${tw`w-full p-4`}
`

export const Founder: React.FC = () => {
  return (
    <>
      <Container tag={'div'} tw="px-0 sm:p-5 md:p-10">
        <Content>
          <ContentHead>
            Founders<span tw="text-secondary">_</span>
          </ContentHead>
          <ContentGalery>
            <ContentGaleryItems>
              <div tw="border-2 border-primary rounded-md shadow flex flex-col p-5 text-gray-500">
                <div tw="flex flex-col space-y-4 lg:space-y-0 sm:flex-row">
                  <img src={'/assets/images/founder-1.png'} width={150} />
                  <div tw="flex flex-col sm:justify-center sm:ml-6">
                    <p tw="text-[#3B82F6] font-semibold text-xl sm:mb-2">Ahmad Nugraha, S.T, M.M</p>
                    <p tw="font-medium">Pendiri & Komisaris</p>
                  </div>
                </div>
                <p tw="my-6 lg:pr-16">
                  Lebih dari 16 tahun pengalaman profesional di bidang Teknologi Informasi dan Komunikasi (TIK). Memiliki
                  passion di bidang bisnis digital dan socio-technopreneurship. Berpengalaman global bekerja di berbagai
                  perusahaan multinasional.
                </p>
                <div tw="flex items-center mt-2">
                  <img src={'/assets/icons/linkedin.png'} />
                  <Link href="http://linkedin.com/in/ahmadnr">
                    <a target="_blank">
                      <p tw="ml-3 hover:cursor-pointer">linkedin.com/in/ahmadnr</p>
                    </a>
                  </Link>
                </div>
              </div>
            </ContentGaleryItems>
            <ContentGaleryItems>
              <div tw="border-2 border-primary rounded-md shadow flex flex-col p-5 text-gray-500">
                <div tw="flex flex-col space-y-4 lg:space-y-0 sm:flex-row">
                  <img src={'/assets/images/founder-2.png'} width={150} />
                  <div tw="flex flex-col sm:justify-center sm:ml-6">
                    <p tw="text-[#3B82F6] font-semibold text-xl sm:mb-2">Sutisna S.Kom</p>
                    <p tw="font-medium">Pendiri & Direktur Utama</p>
                  </div>
                </div>
                <p tw="my-6 lg:pr-16">
                  Pengalaman profesional di bidang Teknologi Informasi dan Komunikasi (TIK) lebih dari 10 tahun. Terpilih
                  sebagai YSEALI Academic Fellows 2016 untuk kuliah singkat di University of Connecticut di Amerika Serikat.
                </p>
                <div tw="flex items-center mt-2">
                  <img src={'/assets/icons/linkedin.png'} />
                  <Link href="http://linkedin.com/in/sutisna">
                    <a target="_blank">
                      <p tw="ml-3 hover:cursor-pointer">linkedin.com/in/sutisna</p>
                    </a>
                  </Link>
                </div>
              </div>
            </ContentGaleryItems>
          </ContentGalery>
        </Content>
      </Container>
    </>
  )
}
