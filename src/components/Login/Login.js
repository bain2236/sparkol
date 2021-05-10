import React, { useState } from "react";
import PropTypes from "prop-types";
import { userLogin } from "../../API/API";
import "./Login.css";

const loginUser = async (user, password) => {
  return userLogin(user, password);
};

const Login = (props) => {
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser(props.user, password);
    props.setToken(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            data-testid="input-username"
            type="text"
            onChange={(e) => props.setUser(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            data-testid="input-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button data-testid="button-login" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  user: PropTypes.string,
  setUser: PropTypes.func.isRequired,
};

export default Login;
