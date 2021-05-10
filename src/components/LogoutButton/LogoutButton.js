import React from "react";
import PropTypes from "prop-types";

const LogoutButton = (props) => {
  const handleLogout = (e) => {
    sessionStorage.clear("token");
    props.setToken(undefined);
  };

  return <button onClick={handleLogout}>logout</button>;
};
export default LogoutButton;

LogoutButton.propTypes = {
  setToken: PropTypes.func.isRequired,
};
