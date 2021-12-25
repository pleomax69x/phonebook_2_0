import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import authOperation from "../redux/auth/auth-operation";

function UserBar() {
  const dispatch = useDispatch();
  return (
    <>
      <NavLink to="/contacts"></NavLink>
      <button onClick={() => dispatch(authOperation.logout())} type="button">
        Logout
      </button>
    </>
  );
}

export default UserBar;
