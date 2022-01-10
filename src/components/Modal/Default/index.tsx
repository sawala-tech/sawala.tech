import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { X } from 'react-feather'

interface DefaultModal {
  open: boolean
  closeButton?: boolean
  onClose?: any
}
export const DefaultModal: React.FunctionComponent<DefaultModal & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  open,
  closeButton,
  onClose,
  children
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open)
  useEffect(() => {
    const getOpen = () => {
      setIsOpen(open)
    }
    getOpen()
    return () => {
      getOpen()
    }
  }, [open])
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" tw="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
          <div tw="min-h-screen text-center bg-[#236AF2]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay tw="fixed inset-0" />
            </Transition.Child>
            <span tw="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 -scale-y-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 -scale-y-95">
              <div className="inline-block w-full h-screen overflow-hidden align-middle">
                {closeButton && (
                  <button
                    type="button"
                    tw="absolute top-[3rem] right-[1.90rem] sm:right-[2.50rem] md:right-[1.90rem] lg:right-[8rem] focus:outline-none outline-none"
                    onClick={() => {
                      setIsOpen(false)
                      onClose && onClose()
                    }}>
                    <X size={40} color="#ffffff" />
                  </button>
                )}
                <div>{children}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
