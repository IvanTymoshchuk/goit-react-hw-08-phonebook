import { useSelector } from 'react-redux';
import {
  selectedUser,
  selectedIsLoggedIn,
  selectedIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const isRefreshing = useSelector(selectedIsRefreshing);
  const user = useSelector(selectedUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
