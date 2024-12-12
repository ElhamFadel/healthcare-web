import React, { useEffect } from 'react';
import styles from './Splash.module.css';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/"; // Redirect to home after the splash screen
    }, 3000); // Splash screen duration (3 seconds)
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="App Logo" />
      </div>
    </div>
  );
};

export default Splash;
