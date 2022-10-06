import React, { useState } from 'react';
import { Checkbox, Modal } from '@mui/material';
import { EventNote, Edit, Delete } from '@mui/icons-material';
import styles from './index.module.scss';
import TaskForm from '../TaskForm';

type Props = {
  task: { id: number; title: string; completed: boolean };
};

const index: React.FC<Props> = ({ task }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <button onClick={() => handleOpen()} className={styles.edit_button}>
          <Edit className={styles.icon} />
        </button>
        <button onClick={() => console.log(`delete ${task.id}`)} className={styles.delete_button}>
          <Delete className={styles.icon} />
        </button>
      </div>

      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit</div>
          <TaskForm isEdited />
        </div>
      </Modal>
    </div>
  );
};

export default index;
