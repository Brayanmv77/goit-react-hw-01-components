import PropTypes from 'prop-types';
import styles from './Wrapper.module.css';

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import Friends from 'components/Friends/Friends';
import TransactionHistory from 'components/Transactions/Transactions';

export default function Wrapper({ data }) {
  return (
    <section className={styles.wrapper}>
      <Profile profile={data.profile}></Profile>
      <Statistics statistics={data.data} title='UPLOAD STATS'></Statistics>
      <Friends friends={data.friends}></Friends>
      <TransactionHistory items={data.transactions}></TransactionHistory>
    </section>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
