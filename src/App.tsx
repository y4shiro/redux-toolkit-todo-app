import React from 'react';
import styles from './App.module.scss';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <p>hello</p>
      </div>
    </div>
  );
};

export default App;
