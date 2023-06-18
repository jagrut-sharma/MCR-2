import { v4 as uuid } from "uuid";

export const habitsdata = [
  {
    _id: uuid(),
    name: "Exercise",
    repeat: "daily",
    duration: "30",
    time: "Morning",
    startdate: "Today",
  },
  {
    _id: uuid(),
    name: "Meditation",
    repeat: "weekly",
    duration: "60",
    time: "Evening",
    startdate: "Next week",
  },
  {
    _id: uuid(),
    name: "Drink Water",
    repeat: "hourly",
    duration: "15",
    time: "Morning",
    startdate: "Next month",
  },
  {
    _id: uuid(),
    name: "Reading",
    repeat: "monthly",
    duration: "30",
    time: "Night",
    startdate: "Tomorrow",
  },
];
