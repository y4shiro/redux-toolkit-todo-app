import React from 'react';

import TaskItem from '../TaskItem';
import styles from './index.module.scss';
import sampleData from './sampleData.json';

const index: React.FC = () => {
  return (
    <div className={styles.root}>
      {sampleData.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default index;
