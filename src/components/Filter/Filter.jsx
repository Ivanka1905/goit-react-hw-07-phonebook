import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContactAction } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterContacts = e => {
    const searchValue = e.target.value.toLowerCase();
    dispatch(filterContactAction(searchValue));
  };

  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={filterContacts}></Input>
    </Label>
  );
};

export default Filter;
