import React from 'react';
import styles from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr>
          <th className={styles.heading}>Type</th>
          <th className={styles.heading}>Amount</th>
          <th className={styles.heading}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
            <td className={styles.body}>{item.type}</td>
            <td className={styles.body}>{item.amount}</td>
            <td className={styles.body}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
