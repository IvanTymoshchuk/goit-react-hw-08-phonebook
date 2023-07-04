import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import GlobalTitle from './Layout/Title';
import FormList from './FormList/FormList';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


function App() {
  return (
    <Layout>
      <GlobalTitle title="Phonebook" />
      <FormList />
      <GlobalTitle title="Contacts" />
      <Filter />
      <ContactList />
      <ToastContainer />
    </Layout>
  );
}

export default App;
