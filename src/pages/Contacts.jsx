import { HelmetProvider } from 'react-helmet-async';
import FormList from '../components/FormList/FormList';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import GlobalTitle from '../components/Layout/Title';

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <GlobalTitle title="Phonebook" />
        <FormList />
        <GlobalTitle title="Contacts" />
        <Filter />
        <ContactList />
      </HelmetProvider>
    </>
  );
}

export default Contacts;
