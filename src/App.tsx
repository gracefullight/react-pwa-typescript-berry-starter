import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit&nbsp;
          <code>src/App.tsx</code>
          &nbsp;and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
