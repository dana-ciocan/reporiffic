import React from 'react';
import styles from './TopMenu.module.css';
import Image from 'next/image';

export interface TopMenuProps {
  loggedIn: boolean;
  avatar?: string;
}

export const TopMenu = ({ loggedIn, avatar }: TopMenuProps): JSX.Element => (
  <nav className={styles['top-menu']}>
    {loggedIn ? (
      <a href='/api/auth/signout'>Sign out</a>
    ) : (
      <a href='/api/auth/signin'>Sign in</a>
    )}
    {avatar && (
      <Image
        className={styles['avatar']}
        width={100}
        height={100}
        src={avatar}
        alt=''
      />
    )}
  </nav>
);
