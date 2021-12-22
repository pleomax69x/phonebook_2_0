import { NavLink } from "react-router-dom";
function AuthBar() {
  return (
    <div>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
}

export default AuthBar;
