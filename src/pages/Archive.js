import React from "react";
import { useData } from "../context/dataContext";
import HabitsModal from "../components/HabitsModal";
import Modal from "../components/Modal";

export default function Archive() {
  const {
    dataState: { archived },
  } = useData();

  return (
    <div className="font-Libre">
      <h2 className="text-3xl font-bold m-4 text-center">Archived</h2>
      <Modal />

      {archived.length === 0 && (
        <p className="text-center text-xl mt-8">No habits archived</p>
      )}

      <div className="flex justify-center">
        {archived.map((habit) => (
          <div
            key={habit._id}
            className="items-center bg-slate-800 p-4 m-4 w-max rounded shadow-md"
          >
            <HabitsModal title={habit.name} habitData={habit} />
          </div>
        ))}
      </div>
    </div>
  );
}
