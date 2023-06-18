import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { useImmer } from "use-immer";
import { useData } from "../context/dataContext";
import { ACTIONS } from "../utils/ACTIONS";
import { v4 as uuid } from "uuid";

export default function Modal() {
  const { dataDispatch } = useData();
  let [isOpen, setIsOpen] = useState(false);

  const [inputData, setInputData] = useImmer({
    _id: uuid(),
    name: "",
    repeat: "hourly",
    duration: "10",
    time: "Morning",
    startdate: "Today",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (e) => {
    setInputData((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  const handleSave = () => {
    dataDispatch({ type: ACTIONS.ADD_HABIT, payload: inputData });
    closeModal();
    setInputData({
      _id: uuid(),
      name: "",
      repeat: "hourly",
      duration: "10",
      time: "Morning",
      startdate: "Today",
    });
  };

  return (
    <>
      <div
        className="bg-green-500 cursor-pointer p-4 rounded-full flex items-center w-max fixed bottom-[2rem] right-[2rem]"
        onClick={openModal}
      >
        <button type="button">
          <BsPlusLg size={"1.5rem"} />{" "}
        </button>
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
                    as="h2"
                    className="text-xl font-medium font-Libre leading-6 text-gray-900"
                  >
                    New Habit
                  </Dialog.Title>
                  <div className="mt-2 flex flex-col gap-2">
                    <label htmlFor="name" className="text-lg">
                      Name:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="border border-gray-300 rounded-md p-1"
                      id="name"
                      name="name"
                      value={inputData.name}
                      onChange={handleChange}
                      required
                    />

                    <div className="flex mt-2 justify-between">
                      <div>
                        <label
                          htmlFor="repeat"
                          className="text-md font-medium font-Libre"
                        >
                          Repeat:{" "}
                        </label>
                        <select
                          name="repeat"
                          id="repeat"
                          className="border border-gray-400 rounded-lg p-1"
                          value={inputData.repeat}
                          onChange={handleChange}
                        >
                          <option value="hourly">Hourly</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="duration"
                          className="text-md font-medium font-Libre"
                        >
                          Duration:{" "}
                        </label>
                        <select
                          name="duration"
                          id="duration"
                          className="border border-gray-400 rounded-lg p-1"
                          value={inputData.duration}
                          onChange={handleChange}
                        >
                          <option value={"10"}>10 min</option>
                          <option value={"15"}>15 min</option>
                          <option value={"30"}>30 min</option>
                          <option value={"45"}>45 min</option>
                          <option value={"60"}>60 min</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex mt-2 justify-between">
                      <div>
                        <label
                          htmlFor="time"
                          className="text-md font-medium font-Libre"
                        >
                          Time:{" "}
                        </label>
                        <select
                          name="time"
                          id="time"
                          className="border border-gray-400 rounded-lg p-1"
                          value={inputData.time}
                          onChange={handleChange}
                        >
                          <option value={"Morning"}>Morning</option>
                          <option value={"Afternoon"}>Afternoon</option>
                          <option value={"Evening"}>Evening</option>
                          <option value={"Night"}>Night</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="startdate"
                          className="text-md font-medium font-Libre"
                        >
                          Start:{" "}
                        </label>
                        <select
                          name="startdate"
                          id="startdate"
                          className="border border-gray-400 rounded-lg p-1"
                          value={inputData.startdate}
                          onChange={handleChange}
                        >
                          <option value={"Today"}>Today</option>
                          <option value={"Tomorrow"}>Tomorrow</option>
                          <option value={"Next week"}>Next week</option>
                          <option value={"Next month"}>Next month</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSave}
                    >
                      Save
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
