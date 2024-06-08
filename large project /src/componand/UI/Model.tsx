import {  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import Button from './button'
import { ReactNode } from 'react';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode
  }
const Model = ({isOpen, onClose, title, children}: IProps) => {
    

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={onClose} __demoMode>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                    {title}
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white/50">
                    
                  </p>
                  <div className="mt-4">
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


export default Model;
