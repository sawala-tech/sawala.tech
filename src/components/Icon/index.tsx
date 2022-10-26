interface IconProps {
  height?: number
  width?: number
}
export const IconMan = ({ width, height, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.832 11.6667H17.1654C15.332 11.6667 13.832 13.1667 13.832 15V23.3333C13.832 24.25 14.582 25 15.4987 25H17.1654V35C17.1654 35.9167 17.9154 36.6667 18.832 36.6667H22.1654C23.082 36.6667 23.832 35.9167 23.832 35V25H25.4987C26.4154 25 27.1654 24.25 27.1654 23.3333V15C27.1654 13.1667 25.6654 11.6667 23.832 11.6667Z"
        fill="white"
      />
      <path
        d="M20.5013 10C22.3423 10 23.8346 8.50762 23.8346 6.66667C23.8346 4.82572 22.3423 3.33334 20.5013 3.33334C18.6604 3.33334 17.168 4.82572 17.168 6.66667C17.168 8.50762 18.6604 10 20.5013 10Z"
        fill="white"
      />
    </svg>
  )
}
export const IconGirl = ({ width, height, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.5013 10C22.3423 10 23.8346 8.50762 23.8346 6.66667C23.8346 4.82572 22.3423 3.33334 20.5013 3.33334C18.6604 3.33334 17.168 4.82572 17.168 6.66667C17.168 8.50762 18.6604 10 20.5013 10Z"
        fill="white"
      />
      <path
        d="M27.9183 24.3833L23.7183 13.85C23.185 12.5333 21.9183 11.6833 20.485 11.6667C19.0683 11.6667 17.785 12.5167 17.2517 13.85L13.0517 24.3833C12.635 25.4833 13.4517 26.6667 14.6183 26.6667H17.1683V35C17.1683 35.9167 17.9183 36.6667 18.835 36.6667H22.1683C23.085 36.6667 23.835 35.9167 23.835 35V26.6667H26.385C27.5517 26.6667 28.3683 25.4833 27.9183 24.3833Z"
        fill="white"
      />
    </svg>
  )
}
export const IconPeople = ({ width, height, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
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
  )
}

export const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.231 15.26L16.691 14.97C16.3924 14.9349 16.0896 14.968 15.8056 15.0667C15.5215 15.1654 15.2635 15.3273 15.051 15.54L13.211 17.38C10.3722 15.9362 8.0648 13.6288 6.62102 10.79L8.47102 8.94001C8.90102 8.51001 9.11102 7.91001 9.04102 7.30001L8.75102 4.78001C8.69432 4.29219 8.46021 3.84225 8.09325 3.51586C7.7263 3.18947 7.25212 3.00943 6.76102 3.01001H5.03102C3.90102 3.01001 2.96102 3.95001 3.03102 5.08001C3.56102 13.62 10.391 20.44 18.921 20.97C20.051 21.04 20.991 20.1 20.991 18.97V17.24C21.001 16.23 20.241 15.38 19.231 15.26V15.26Z"
      fill="#236AF2"
    />
  </svg>
)

export const IconMail = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5 4H4.5C3.4 4 2.5 4.9 2.5 6V18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4ZM20.1 8.25L13.56 12.34C12.91 12.75 12.09 12.75 11.44 12.34L4.9 8.25C4.79973 8.19371 4.71192 8.11766 4.64189 8.02645C4.57186 7.93525 4.52106 7.83078 4.49258 7.71937C4.46409 7.60796 4.4585 7.49194 4.47616 7.37831C4.49381 7.26468 4.53434 7.15581 4.59528 7.0583C4.65623 6.96079 4.73632 6.87666 4.83073 6.811C4.92513 6.74533 5.03187 6.69951 5.1445 6.6763C5.25712 6.65309 5.37328 6.65297 5.48595 6.67595C5.59863 6.69893 5.70546 6.74453 5.8 6.81L12.5 11L19.2 6.81C19.2945 6.74453 19.4014 6.69893 19.514 6.67595C19.6267 6.65297 19.7429 6.65309 19.8555 6.6763C19.9681 6.69951 20.0749 6.74533 20.1693 6.811C20.2637 6.87666 20.3438 6.96079 20.4047 7.0583C20.4657 7.15581 20.5062 7.26468 20.5238 7.37831C20.5415 7.49194 20.5359 7.60796 20.5074 7.71937C20.4789 7.83078 20.4281 7.93525 20.3581 8.02645C20.2881 8.11766 20.2003 8.19371 20.1 8.25Z"
      fill="#236AF2"
    />
  </svg>
)

export const IconGLobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"
      fill="#236AF2"
    />
  </svg>
)
