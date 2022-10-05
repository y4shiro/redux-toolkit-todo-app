import React from 'react';
import styles from './App.module.scss';

import Header from './components/Header';
import TaskForm from './features/task/TaskForm';

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <p>hello</p>
      </div>
    </div>
  );
};

export default App;
