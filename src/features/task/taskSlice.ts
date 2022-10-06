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
  isModalOpen: true,
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
  },
});

export const { createTask } = taskSlice.actions;
export const selectTask = (state: RootState): TaskState['tasks'] => state.task.tasks;
export default taskSlice.reducer;
