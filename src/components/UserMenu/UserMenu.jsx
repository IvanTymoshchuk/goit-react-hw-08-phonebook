import { useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <p>Welcome, {user.name}</p>  */}
      <p>Welcome</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
