import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function HabitsModal({ title, habitData }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={openModal}
      >
        <div className="rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-Libre">
          {title}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900"
                  >
                    {habitData.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-800 font-bold">
                      Repeat:
                      <span className="text-sm text-gray-500 ml-[4px]">
                        {habitData.repeat[0].toUpperCase() +
                          habitData.repeat.slice(1)}
                      </span>
                    </p>

                    <p className="text-sm text-gray-800 font-bold mt-1">
                      Start Date:
                      <span className="text-sm text-gray-500 ml-[4px]">
                        {habitData.startdate[0].toUpperCase() +
                          habitData.startdate.slice(1)}
                      </span>
                    </p>

                    <p className="text-sm text-gray-800 font-bold mt-1">
                      Duration:
                      <span className="text-sm text-gray-500 ml-[4px]">
                        {habitData.duration[0].toUpperCase() +
                          habitData.duration.slice(1) +
                          " " +
                          "min"}
                      </span>
                    </p>

                    <p className="text-sm text-gray-800 font-bold mt-1">
                      From:
                      <span className="text-sm text-gray-500 ml-[4px]">
                        {habitData.time[0].toUpperCase() +
                          habitData.time.slice(1)}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
