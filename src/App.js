import "./App.css";
import Phonebook from "./components/Phonebook";

import { Switch } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

import Navigation from "./components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import authOperation from "./redux/auth/auth-operation";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authSelectors from "./redux/auth/auth-selector";

function App() {
  const dispatch = useDispatch();
  const isLoad = useSelector(authSelectors.getIsLoading);

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isLoad ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Navigation />
          <Switch>
            <PublicRoute path="/register" resricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" resricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <Phonebook />
            </PrivateRoute>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
