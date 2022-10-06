import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { createTask } from '../taskSlice';

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

  const handleCreate = (data: InputType) => {
    console.log(data);
    dispatch(createTask(data.taskTitle));
    reset();
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <TextField
          {...register('taskTitle')}
          name='taskTitle'
          id='outlined-basic'
          label={isEdited ? 'Edit Task' : 'New Task'}
          variant='outlined'
          className={styles.text_field}
        />
        {isEdited ? (
          <div className={styles.button_wrapper}>
            <button type='submit' className={styles.submit_button}>
              Submit
            </button>
            <button type='button' className={styles.cancel_button}>
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default index;
