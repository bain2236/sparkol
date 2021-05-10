import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    if (userToken === undefined) {
      sessionStorage.clear("token");
    } else {
      sessionStorage.setItem("token", JSON.stringify(userToken));
    }
    console.log("setting the token");
    console.log(userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
