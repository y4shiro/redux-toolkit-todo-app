import React from 'react';
import TextField from '@mui/material/TextField';

import styles from './index.module.scss';

const index: React.FC = () => {
  return (
    <div className={styles.root}>
      <form className={styles.form} noValidate autoComplete='off'>
        <TextField
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
