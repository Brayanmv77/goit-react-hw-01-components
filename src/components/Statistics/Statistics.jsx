import React from 'react';
import styles from './Statistics.module.css';
import { getColorByIndex } from './index';

export default function Statistics({ statistics, title }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles['stat-list']}>
        {statistics.map((item) => (
          <li className={styles.item} style={{ backgroundColor: getColorByIndex(item.percentage) }}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
