import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContactAction } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const filterContacts = e => {
    const searchValue = e.target.value.toLocaleLowerCase();
    dispatch(filterContactAction(searchValue));
  };

  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={filterContacts}></Input>
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
