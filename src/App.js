import "./App.css";
import Phonebook from "./components/Phonebook";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Switch> */}
      <Route path="/register">
        <RegisterPage />
      </Route>
      <RegisterPage />
      {/* <Route path="/login">
          <LoginPage />
        </Route> */}
      <Route path="/contacts">
        <Phonebook />
      </Route>
      {/* </Switch> */}
    </div>
  );
}

export default App;
