import React from 'react';
import styles from './Friends.module.css';

export default function Friends({ friends }) {
  const getStatusColor = (isOnline) => {
    return isOnline ? styles.connected : styles.disconnected;
  };

  return (
    <ul className={styles['friend-list']}>
      {friends.map((friend) => (
        <li className={styles.friend}>
          <span
            className={`${styles.status} ${getStatusColor(friend.isOnline)}`}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
