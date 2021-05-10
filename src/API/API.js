const axios = require("axios").default;

const api = "http://localhost:3333/";

export const userLogin = async (username, password) => {
  try {
    const response = await axios.post(`${api}login`, {
      username: username,
      password: password,
    });
    console.log(response);
    return response.data.token;
  } catch (err) {
    console.error(err);
  }
};

export const verifyToken = async () => {
  try {
    const response = await axios.post(`${api}verifyToken`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
