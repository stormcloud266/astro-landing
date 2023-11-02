import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
interface NavProps {}

const Nav = ({}: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="hidden md:flex gap-4 font-bold uppercase text-sm">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>

      <div className="md:hidden relative">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative z-50"
        >
          Menu
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-slate-700" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full transform overflow-hidden p-6 text-center transition-all bg-black min-h-full">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4"
                  >
                    X
                  </button>
                  <nav className="flex flex-col gap-4 font-bold uppercase text-sm">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default Nav;
