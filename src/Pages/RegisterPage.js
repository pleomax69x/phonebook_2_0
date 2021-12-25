import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../redux/auth/auth-operation";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const dispatch = useDispatch();

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case "name":
  //         return setName(value);
  //       case "email":
  //         return setEmail(value);
  //       case "password":
  //         return setPassword(value);

  //       default:
  //         break;
  //     }
  //   };

  const handleForm = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(authOperation.register(newUser));
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleForm} autoComplete="off">
        <label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name"
            autoComplete="off"
          />
          Name
        </label>
        <label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            autoComplete="off"
          />
          Email
        </label>
        <label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            autoComplete="off"
          />
          password
        </label>
        <button type="submit">Submin</button>
      </form>
    </div>
  );
}

export default RegisterPage;

// className = "search_input";
// type = "text";
// name = "search";
// value = { query };
// onChange = { handleChange };
// placeholder = "Enter film to search";
// autoComplete = "off";
