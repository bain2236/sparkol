import React from "react";
import PropTypes from "prop-types";

const LogoutButton = (props) => {
  const handleLogout = (e) => {
    props.setToken(undefined);
  };

  return (
    <button data-testid="button-logout" onClick={handleLogout}>
      logout
    </button>
  );
};
export default LogoutButton;

LogoutButton.propTypes = {
  setToken: PropTypes.func.isRequired,
};
