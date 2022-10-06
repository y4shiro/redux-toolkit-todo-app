import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type TaskState = {
  idCount: number; // Task の個数
  tasks: { id: number; title: string; completed: boolean }[];
  selectedTask: { id: number; title: string; completed: boolean }; // 編集中の Task
  isModalOpen: boolean; // Task を編集するモーダルの改変管理
};

const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: 'TaskA', completed: false }],
  selectedTask: { id: 0, title: '', completed: false },
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.idCount++;
      const newTask = { id: state.idCount, title: action.payload, completed: false };
      state.tasks = [newTask, ...state.tasks];
    },

    editTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.title = action.payload.title;
    },

    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },

    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { createTask, editTask, selectTask, handleModalOpen } = taskSlice.actions;
export const selectTasks = (state: RootState): TaskState['tasks'] => state.task.tasks;
export const selectIsModalOpen = (state: RootState): TaskState['isModalOpen'] =>
  state.task.isModalOpen;
export const selectSelectedTask = (state: RootState): TaskState['selectedTask'] =>
  state.task.selectedTask;
export default taskSlice.reducer;
