import PropTypes from 'prop-types';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';

export default function Wrapper({ data }) {
  return (
    <div>
      <Profile profile={data.profile}></Profile>
      <Statistics statistics={data.data} title='Upload Stats'></Statistics>
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
