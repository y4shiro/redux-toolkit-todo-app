import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Modal } from '@mui/material';
import { EventNote, Edit, Delete } from '@mui/icons-material';

import { selectTask, handleModalOpen, selectIsModalOpen, completeTask } from '../taskSlice';
import styles from './index.module.scss';
import TaskForm from '../TaskForm';

type Props = {
  task: { id: number; title: string; completed: boolean };
};

const index: React.FC<Props> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };
  const handleClose = () => dispatch(handleModalOpen(false));

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNote />
        <div className={styles.title_text}>{task.title}</div>
      </div>

      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => dispatch(completeTask(task))}
          className={styles.checkbox}
        />
        <button onClick={() => handleOpen()} className={styles.edit_button}>
          <Edit className={styles.icon} />
        </button>
        <button onClick={() => console.log(`delete ${task.id}`)} className={styles.delete_button}>
          <Delete className={styles.icon} />
        </button>
      </div>

      <Modal open={isModalOpen} onClose={handleClose} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit</div>
          <TaskForm isEdited />
        </div>
      </Modal>
    </div>
  );
};

export default index;
