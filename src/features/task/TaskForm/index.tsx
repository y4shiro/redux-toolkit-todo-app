import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { selectSelectedTask, editTask, createTask, handleModalOpen } from '../taskSlice';

import styles from './index.module.scss';

type InputType = {
  taskTitle?: string;
};

type Props = {
  isEdited?: boolean;
};

const index: React.FC<Props> = ({ isEdited }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const selectedTask = useSelector(selectSelectedTask);

  const handleCreate = (data: InputType) => {
    console.log(data);
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleEdit = (data: InputType) => {
    const sendData = { ...selectedTask, title: data.taskTitle };
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <form
        onSubmit={isEdited ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          {...register('taskTitle')}
          id='outlined-basic'
          label={isEdited ? 'Edit Task' : 'New Task'}
          defaultValue={isEdited ? selectedTask.title : ''}
          variant='outlined'
          name='taskTitle'
          className={styles.text_field}
        />
        {isEdited ? (
          <div className={styles.button_wrapper}>
            <button type='submit' className={styles.submit_button}>
              Submit
            </button>
            <button
              type='button'
              className={styles.cancel_button}
              onClick={() => dispatch(handleModalOpen(false))}
            >
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default index;
