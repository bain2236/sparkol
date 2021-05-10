const axios = require("axios").default;

const api = "http://localhost:3333/";

export const userLogin = async (username, password) => {
  try {
    const response = await axios.post(`${api}login`, {
      username: username,
      password: password,
    });
    return response.data.token;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const verifyToken = async () => {
  try {
    const response = await axios.post(`${api}verifyToken`);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
