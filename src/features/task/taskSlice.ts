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
    // タスクの新規作成
    createTask: (state, action) => {
      state.idCount++;
      const newTask = { id: state.idCount, title: action.payload, completed: false };
      state.tasks = [newTask, ...state.tasks];
    },
    // タスクの編集
    editTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.title = action.payload.title;
    },
    // どのタスクを選択しているかを管理
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    // モーダルの開閉フラグを管理
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    // タスクの完了・未完了のフラグを管理、呼び出すたびに boolean を反転させる
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { createTask, editTask, selectTask, handleModalOpen, completeTask } =
  taskSlice.actions;
export const selectTasks = (state: RootState): TaskState['tasks'] => state.task.tasks;
export const selectIsModalOpen = (state: RootState): TaskState['isModalOpen'] =>
  state.task.isModalOpen;
export const selectSelectedTask = (state: RootState): TaskState['selectedTask'] =>
  state.task.selectedTask;
export default taskSlice.reducer;
