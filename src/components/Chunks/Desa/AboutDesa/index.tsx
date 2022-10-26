/* eslint-disable prettier/prettier */
import { Container } from '@/components/Layouts'

export const AboutDesa: React.FC = () => {
  return (
    <Container>
      <div tw="text-lg text-gray-700 flex flex-col space-y-5">
        <p>
          Desa Langonsari adalah salah satu desa dari 6 (enam) desa yang berada di wilayah Kecamatan Pameungpeuk Kabupaten
          Bandung, yang terbentuk dari pemekaran Desa Sukasari pada tahun 1982 yang berdasarkan :
        </p>

        <ul className="pl-5 list-decimal">
          <li>Surat Keputusan Gubernur Jawa Barat Nomor : 146/SK.1968-Pemdes/1982, Tanggal 30 Nopember 1982.</li>
          <li>Surat Keputusan Bupati Bandung Nomor : 146/SK.PM.024-BK-HUK/1983, Tanggal 27 Juli 1983</li>
        </ul>

        <p>
          Langonsari berasal dari kata Palalangon yang artinya saung tinggi di pinggir hutan atau huma untuk mengintai
          binatang buruan dan Sari atau Asri yang artinya Indah, sehingga secara harapiah Langonsari berarti suatu bangunan
          indah tempat mengintai dengan harapan menjadi pusat perhatian banyak orang.
        </p>

        <p>
          Desa Langonsari merupakan desa yang berbukit dan mempunyai batas wilayah dengan desa-desa yang lain diantaranya :
        </p>

        <div>
          <div tw="flex space-x-3">
            <p tw="w-44">Sebelah Utara </p>
            <p>: Desa Malakasari Kecamatan Baleendah.</p>
          </div>
          <div tw="flex space-x-3">
            <p tw="w-44">Sebelah Timur </p>
            <p>: Kelurahan Andir Kecamatan Baleendah.</p>
          </div>
          <div tw="flex space-x-3">
            <p tw="w-44">Sebelah Selatan </p>
            <p>: Desa Bojongmanggu Kecamatan Pameungpeuk.</p>
          </div>
          <div tw="flex space-x-3">
            <p tw="w-44">Sebelah Barat </p>
            <p>: Desa Sukasari Kecamatan Pameungpeuk.</p>
          </div>
          <div tw="flex space-x-3">
            <p>Koordinat Desa Langonsari terletak </p>
            <p>: 107.60434 LS/LU-70.20245 BT/BB</p>
          </div>
        </div>
      </div>

      <div tw="flex justify-center flex-col space-y-7 items-center w-full mx-auto p-5 bg-info-desa bg-cover bg-no-repeat bg-center rounded-3xl my-10 text-white">
        <h1 tw="text-3xl font-semibold">Data Penduduk</h1>
        <div className="grid w-11/12 grid-cols-3 gap-x-4">
          <div className="flex flex-col items-center justify-center space-y-3">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.832 11.6667H17.1654C15.332 11.6667 13.832 13.1667 13.832 15V23.3333C13.832 24.25 14.582 25 15.4987 25H17.1654V35C17.1654 35.9167 17.9154 36.6667 18.832 36.6667H22.1654C23.082 36.6667 23.832 35.9167 23.832 35V25H25.4987C26.4154 25 27.1654 24.25 27.1654 23.3333V15C27.1654 13.1667 25.6654 11.6667 23.832 11.6667Z"
                fill="white"
              />
              <path
                d="M20.5013 10C22.3423 10 23.8346 8.50762 23.8346 6.66667C23.8346 4.82572 22.3423 3.33334 20.5013 3.33334C18.6604 3.33334 17.168 4.82572 17.168 6.66667C17.168 8.50762 18.6604 10 20.5013 10Z"
                fill="white"
              />
            </svg>
            <h2 className="text-2xl font-bold">9.688</h2>
            <p className="text-base font-medium">LAKI-LAKI</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5013 10C22.3423 10 23.8346 8.50762 23.8346 6.66667C23.8346 4.82572 22.3423 3.33334 20.5013 3.33334C18.6604 3.33334 17.168 4.82572 17.168 6.66667C17.168 8.50762 18.6604 10 20.5013 10Z"
                fill="white"
              />
              <path
                d="M27.9183 24.3833L23.7183 13.85C23.185 12.5333 21.9183 11.6833 20.485 11.6667C19.0683 11.6667 17.785 12.5167 17.2517 13.85L13.0517 24.3833C12.635 25.4833 13.4517 26.6667 14.6183 26.6667H17.1683V35C17.1683 35.9167 17.9183 36.6667 18.835 36.6667H22.1683C23.085 36.6667 23.835 35.9167 23.835 35V26.6667H26.385C27.5517 26.6667 28.3683 25.4833 27.9183 24.3833Z"
                fill="white"
              />
            </svg>
            <h2 className="text-2xl font-bold">8.989</h2>
            <p className="text-base font-medium">PEREMPUAN</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2302_2207)">
                <path
                  d="M20.5 21.25C23.2167 21.25 25.6167 21.9 27.5667 22.75C29.3667 23.55 30.5 25.35 30.5 27.3V28.3333C30.5 29.25 29.75 30 28.8333 30H12.1667C11.25 30 10.5 29.25 10.5 28.3333V27.3167C10.5 25.35 11.6333 23.55 13.4333 22.7667C15.3833 21.9 17.7833 21.25 20.5 21.25ZM7.16667 21.6667C9 21.6667 10.5 20.1667 10.5 18.3333C10.5 16.5 9 15 7.16667 15C5.33333 15 3.83333 16.5 3.83333 18.3333C3.83333 20.1667 5.33333 21.6667 7.16667 21.6667ZM9.05 23.5C8.43333 23.4 7.81667 23.3333 7.16667 23.3333C5.51667 23.3333 3.95 23.6833 2.53333 24.3C1.92952 24.5581 1.41487 24.9879 1.05336 25.5361C0.691855 26.0843 0.499427 26.7267 0.500001 27.3833V28.3333C0.500001 29.25 1.25 30 2.16667 30H8V27.3167C8 25.9333 8.38334 24.6333 9.05 23.5ZM33.8333 21.6667C35.6667 21.6667 37.1667 20.1667 37.1667 18.3333C37.1667 16.5 35.6667 15 33.8333 15C32 15 30.5 16.5 30.5 18.3333C30.5 20.1667 32 21.6667 33.8333 21.6667ZM40.5 27.3833C40.5 26.0333 39.7 24.8333 38.4667 24.3C37.0052 23.6623 35.4278 23.3332 33.8333 23.3333C33.1833 23.3333 32.5667 23.4 31.95 23.5C32.6167 24.6333 33 25.9333 33 27.3167V30H38.8333C39.75 30 40.5 29.25 40.5 28.3333V27.3833ZM20.5 10C23.2667 10 25.5 12.2333 25.5 15C25.5 17.7667 23.2667 20 20.5 20C17.7333 20 15.5 17.7667 15.5 15C15.5 12.2333 17.7333 10 20.5 10Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2302_2207">
                  <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <h2 className="text-2xl font-bold">18.677</h2>
            <p className="text-base font-medium">TOTAL</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
