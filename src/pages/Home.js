import React from "react";
import { useData } from "../context/dataContext";
import Modal from "../components/Modal";
import HabitsModal from "../components/HabitsModal";
import EditingModal from "../components/EditingModal";
import { ACTIONS } from "../utils/ACTIONS";
import { FaFileArchive } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function Home() {
  const {
    dataState: { habitsList },
    dataDispatch,
  } = useData();

  const handleDelete = (habit) => {
    dataDispatch({ type: ACTIONS.DELETE_HABIT, payload: habit });
  };

  const handleArchive = (habit) => {
    dataDispatch({ type: ACTIONS.ARCHIVE_HABIT, payload: habit });
  };

  return (
    <div className="font-Libre">
      <h2 className="text-2xl m-4 text-center">Current habits</h2>
      <Modal />

      <div className="flex flex-col items-center">
        {habitsList.map((habit) => (
          <div
            key={habit._id}
            className="items-center bg-slate-800 p-4 m-4 w-[15rem] rounded shadow-md"
          >
            <HabitsModal title={habit.name} habitData={habit} />

            <div className="text-center mt-4 flex items-center justify-evenly">
              <EditingModal inputReceived={habit} />
              <button
                className="mx-4 border border-black font-bold bg-gray-50 p-1 hover:bg-black hover:text-white rounded-md"
                onClick={() => handleArchive(habit)}
              >
                <FaFileArchive size={"1.5rem"} />
              </button>
              <button
                className="border border-black font-bold hover:bg-black hover:text-white bg-gray-50 p-1 rounded-md"
                onClick={() => handleDelete(habit)}
              >
                <RiDeleteBin2Fill size={"1.5rem"} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
