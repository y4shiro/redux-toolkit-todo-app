import React from 'react';
import styles from './App.module.scss';

import Header from './components/Header';
import TaskForm from './features/task/TaskForm';
import TaskList from './features/task/TaskList';

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
