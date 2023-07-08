import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAll } from 'redux/contacts/operations';
import FormList from '../components/FormList/FormList';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import GlobalTitle from '../components/Layout/Title';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
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
};

export default Contacts;
