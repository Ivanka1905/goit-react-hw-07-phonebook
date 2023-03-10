import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { ContactsList } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addContactAction } from 'redux/contactsSlice';

const Contacts = () => {
  const inputRef = useRef('');
  const contacts = useSelector(state => state.contacts.contact);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const deleteContact = deleteId => {
    dispatch(addContactAction(contacts.filter(c => c.id !== deleteId)));
  };

  const filteredContactsList = contacts.filter(name =>
    name.name.toLocaleLowerCase().includes(filter)
  );

  if (contacts.length === 0) {
    return <h2>No contacts</h2>;
  } else if (inputRef === '') {
    return (
      <ContactsList>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onClick={deleteContact}
              id={id}
            />
          ))}
      </ContactsList>
    );
  } else {
    return (
      <ContactsList>
        {filteredContactsList &&
          filteredContactsList.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onClick={deleteContact}
              id={id}
            />
          ))}
      </ContactsList>
    );
  }
};

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

export default Contacts;
