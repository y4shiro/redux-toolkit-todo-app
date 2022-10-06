import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from '../taskSlice';

import TaskItem from '../TaskItem';
import styles from './index.module.scss';

const index: React.FC = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default index;
