import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { createTask } from '../taskSlice';

import styles from './index.module.scss';

type InputType = {
  taskTitle?: string;
};

const index: React.FC = () => {
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
          label='New Task'
          variant='outlined'
          className={styles.text_field}
        />
      </form>
    </div>
  );
};

export default index;
