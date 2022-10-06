import React from 'react';
import { Checkbox } from '@mui/material';
import { EventNote, Edit, Delete } from '@mui/icons-material';
import styles from './index.module.scss';

type Props = {
  task: { id: number; title: string; completed: boolean };
};

const index: React.FC<Props> = ({ task }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNote />
        <div className={styles.title_text}>{task.title}</div>
      </div>

      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => console.log(`check ${task.id}`)}
          className={styles.checkbox}
        />
        <button onClick={() => console.log(`edit ${task.id}`)} className={styles.edit_button}>
          <Edit className={styles.icon} />
        </button>
        <button onClick={() => console.log(`delete ${task.id}`)} className={styles.delete_button}>
          <Delete className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default index;
