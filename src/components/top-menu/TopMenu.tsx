import React from 'react';
import styles from './TopMenu.module.css';

export const TopMenu = () => (
  <nav className={styles['top-menu']}>
    <a href='/api/auth/signout'>Sign out</a>
  </nav>
);
