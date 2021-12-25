import { useSelector } from "react-redux";
import AuthBar from "./AuthBar";
import UserBar from "./UserBar";
import authSelectors from "../redux/auth/auth-selector";

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);
  return (
    <div>
      <h2>Hello {userName} </h2>

      {isLoggedIn ? <UserBar /> : <AuthBar />}

      {/* <hr /> */}
    </div>
  );
}

export default Navigation;
