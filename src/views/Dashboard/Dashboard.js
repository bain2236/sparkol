import React from "react";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

const Dashboard = (props) => {
  return (
    <div>
      <h2>Welcome {props.user}</h2>
      <LogoutButton setToken={props.setToken}></LogoutButton>
    </div>
  );
};
export default Dashboard;
