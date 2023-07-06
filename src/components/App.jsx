// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { fetchAll } from 'redux/contacts/operations';
// import {Layout} from './Layout/Layout';
// import GlobalTitle from './Layout/Title';
// import FormList from './FormList/FormList';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home'

// function App() {
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchAll());
//   // }, [dispatch]);

//   return (
//     <Layout>
//       <Routes>
//         <Route  index element={<Home />}/>
//       </Routes>
//       {/* <GlobalTitle title="Phonebook" />
//       <FormList />
//       <GlobalTitle title="Contacts" />
//       <Filter />
//       <ContactList />
//       <ToastContainer /> */}
//     </Layout>
//   );
// }

// export default App;
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operation';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
