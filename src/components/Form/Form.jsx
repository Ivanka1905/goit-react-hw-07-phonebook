import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormEl, Label, Input, Button } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContactAction } from 'redux/contactsSlice';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contact);

  const addNewContact = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;

    if (contacts.find(contacts => contacts.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContactAction([...contacts, { id: nanoid(), name, number }]));
    }

    e.target.name.value = '';
    e.target.number.value = '';
  };

  return (
    <FormEl onSubmit={addNewContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormEl>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default Form;
