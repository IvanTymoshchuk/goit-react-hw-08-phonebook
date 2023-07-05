import {NavLink} from 'react-router-dom';

 const AuthNav = () => {
  return(
    <div>
      <NavLink to="/register"></NavLink>
      <NavLink to="/login"></NavLink>
    </div>
  )
}
export default AuthNav;