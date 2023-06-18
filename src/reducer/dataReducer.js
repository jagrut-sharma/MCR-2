import { ACTIONS } from "../utils/ACTIONS";
import { habitsdata } from "../utils/habitsData";

export const initialDataState = {
  archived: [],
  habitsList: [...habitsdata],
};

export const dataReducer = (draft, action) => {
  if (action.type === ACTIONS.ADD_HABIT) {
    draft.habitsList.push(action.payload);
  }

  if (action.type === ACTIONS.DELETE_HABIT) {
    const task = action.payload;
    draft.habitsList = draft.habitsList.filter(({ _id }) => _id !== task._id);
  }

  if (action.type === ACTIONS.EDIT_HABIT) {
    const task = action.payload;
    draft.habitsList = draft.habitsList.map((habit) =>
      habit._id === task._id ? task : habit
    );
  }

  if (action.type === ACTIONS.ARCHIVE_HABIT) {
    const task = action.payload;
    draft.habitsList = draft.habitsList.filter(({ _id }) => _id !== task._id);
    draft.archived.push(action.payload);
  }
};
