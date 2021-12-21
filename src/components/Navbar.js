import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <h2>Hello User Home</h2>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/logout">Logout</NavLink>

      <hr />
    </div>
  );
}

export default Navbar;
