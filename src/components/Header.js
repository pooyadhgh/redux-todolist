import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../Actions';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: '5rem' }}>
      <span style={{ fontWeight: 'bold' }}>Filter:</span>
      <span
        style={{ textDecoration: 'underline' }}
        onClick={() => dispatch(setVisibilityFilter('SHOW_ALL'))}
      >
        All
      </span>
      <span
        style={{ textDecoration: 'underline' }}
        onClick={() => dispatch(setVisibilityFilter('SHOW_ACTIVES'))}
      >
        Active
      </span>
      <span
        style={{ textDecoration: 'underline' }}
        onClick={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))}
      >
        Completed
      </span>
    </div>
  );
};

export default Header;
