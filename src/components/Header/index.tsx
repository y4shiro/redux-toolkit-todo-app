import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './index.module.scss';

const index: React.FC = () => {
  return (
    <div className={styles.root}>
      <AppBar position='static' className={styles.app_bar}>
        <Toolbar className={styles.tool_bar}>
          <Typography variant='h6' component='div' className={styles.title}>
            Redux Toolkit Todo
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default index;
