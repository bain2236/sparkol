import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import useToken from "./hooks/useToken";

const App = () => {
  const { token, setToken } = useToken();
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("token changed");
    console.log(token);
  }, [token]); //

  if (!token) {
    return <Login setToken={setToken} user={user} setUser={setUser} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>

      <Dashboard setToken={setToken} user={user} />
    </div>
  );
};

export default App;
