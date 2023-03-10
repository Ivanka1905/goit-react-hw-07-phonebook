import PropTypes from 'prop-types';
import Form from 'components/Form';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { Container } from 'components/App.styled';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};

App.propTypes = {
  filterContacts: PropTypes.func,
  getDataOnSubmit: PropTypes.func,
  changeFilter: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default App;
