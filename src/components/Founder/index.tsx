import tw, { styled } from 'twin.macro'

import { Container } from '@/components/Layouts'

const Content = styled.div`
  ${tw`flex flex-col items-center justify-between w-full pt-16 pb-[5.625rem]  text-center`}
`

const ContentHead = styled.h1`
  ${tw`text-4xl font-bold mb-7`}
`

const ContentGalery = styled.div`
  ${tw`w-full mt-[3.75rem] grid grid-cols-2 text-left`}
`
const ContentGaleryItems = styled.div`
  ${tw`w-full p-4`}
`

export const Founder: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <ContentHead>
            Founders<span tw="text-secondary">_</span>
          </ContentHead>
          <ContentGalery>
            <ContentGaleryItems>
              <div tw="border-2 border-primary rounded-md shadow flex flex-col p-5 text-gray-500">
                <div tw="flex">
                  <img src={'/assets/images/founder-1.png'} />
                  <div tw="flex flex-col justify-center ml-6">
                    <p tw="text-[#3B82F6] font-semibold text-xl mb-2">Ahmad Nugraha, S.T, M.M</p>
                    <p tw="font-medium">Pendiri & Komisaris</p>
                  </div>
                </div>
                <p tw="my-6  pr-16">
                  Lebih dari 16 tahun pengalaman profesional di bidang Teknologi Informasi dan Komunikasi (TIK). Memiliki
                  passion di bidang bisnis digital dan socio-technopreneurship. Berpengalaman global bekerja di berbagai
                  perusahaan multinasional.
                </p>
                <div tw="flex items-center mt-2">
                  <img src={'/assets/icons/linkedin.png'} />
                  <p tw="ml-3">linkedin.com/in/ahmadnr</p>
                </div>
              </div>
            </ContentGaleryItems>
            <ContentGaleryItems>
              <div tw="border-2 border-primary rounded-md shadow flex flex-col p-5 text-gray-500">
                <div tw="flex">
                  <img src={'/assets/images/founder-2.png'} />
                  <div tw="flex flex-col justify-center ml-6">
                    <p tw="text-[#3B82F6] font-semibold text-xl mb-2">Sutisna S.Kom</p>
                    <p tw="font-medium">Pendiri & Direktur Utama</p>
                  </div>
                </div>
                <p tw="my-6 pr-16">
                  Pengalaman profesional di bidang Teknologi Informasi dan Komunikasi (TIK) lebih dari 10 tahun. Terpilih
                  sebagai YSEALI Academic Fellows 2016 untuk kuliah singkat di University of Connecticut di Amerika Serikat.
                </p>
                <div tw="flex items-center mt-2">
                  <img src={'/assets/icons/linkedin.png'} />
                  <p tw="ml-3">linkedin.com/in/sutisna</p>
                </div>
              </div>
            </ContentGaleryItems>
          </ContentGalery>
        </Content>
      </Container>
    </>
  )
}
