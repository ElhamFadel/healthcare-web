import React, { useEffect } from 'react';
import styles from './Splash.module.css';
import Image from 'next/image';
const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/"; 
    }, 3000); 
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image hrf="/logo.png" width="100" height="100" alt="App Logo" />
      </div>
    </div>
  );
};

export default Splash;
