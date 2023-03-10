import ContactItem from 'components/ContactItem';
import { ContactsList } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = () => {
  const inputRef = useRef('');
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContactsList = contacts.items.filter(name =>
    name.name.toLowerCase().includes(filter)
  );

  if (contacts.items.length === 0) {
    return <h2>No contacts</h2>;
  } else if (inputRef === '') {
    return (
      <ContactsList>
        {contacts.items &&
          contacts.items.map(({ id, name, phone }) => (
            <ContactItem
              key={id}
              name={name}
              phone={phone}
              
              id={id}
            />
          ))}
      </ContactsList>
    );
  } else {
    return (
      <ContactsList>
        {filteredContactsList &&
          filteredContactsList.map(({ id, name, phone }) => (
            <ContactItem
              key={id}
              name={name}
              phone={phone}
            
              id={id}
            />
          ))}
      </ContactsList>
    );
  }
};

export default Contacts;
