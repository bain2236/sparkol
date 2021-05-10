import React from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import LogoutButton from "./LogoutButton";

const mockSetToken = jest.fn();

it("Should call setToken with undefined", () => {
  render(<LogoutButton setToken={mockSetToken} />);
  const logoutButton = screen.getByTestId("button-logout");
  userEvent.click(logoutButton);

  expect(mockSetToken).toHaveBeenCalled();
  expect(mockSetToken).toHaveBeenCalledWith(undefined);
});
