import PropTypes from 'prop-types';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import Friends from 'components/Friends/Friends';
import TransactionHistory from 'components/Transactions/Transactions';

export default function Wrapper({ data }) {
  return (
    <div>
      <Profile profile={data.profile}></Profile>
      <Statistics statistics={data.data} title='Upload Stats'></Statistics>
      <Friends friends={data.friends}></Friends>
      <TransactionHistory items={data.transactions}></TransactionHistory>
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
