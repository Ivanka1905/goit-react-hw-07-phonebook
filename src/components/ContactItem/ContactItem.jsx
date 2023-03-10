import PropTypes from 'prop-types';
import { ListItem, Button, Span } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'redux/service/deleteContacts';

const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  const deleteContact = deleteId => {
    dispatch(deleteContactsThunk(deleteId));
  };
  return (
    <ListItem>
      <span>
        &#9900; {name}: <Span>{phone}</Span>
      </span>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
