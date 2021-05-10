import React from "react";
import { render, act, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import axios from "axios";

const mockSetToken = jest.fn(() => true);
const mockSetUser = jest.fn(() => true);
const loginEndpoint = "http://localhost:3333/login";

it("Should call login api with login form data", () => {
  waitFor(() => {
    render(<Login setToken={mockSetToken} user="test" setUser={mockSetUser} />);
  });

  const login = screen.getByTestId("button-login");

  userEvent.type(screen.getByTestId("input-username"), "jeff1967");
  userEvent.type(screen.getByTestId("input-password"), "hotdog");

  userEvent.click(login);
  waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith(loginEndpoint, {
      password: "hotdog",
      username: "test",
    });
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
