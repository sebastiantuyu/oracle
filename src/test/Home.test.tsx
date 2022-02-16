import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home/Home";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom") as any,
  useNavigate: () => mockedUsedNavigate,
}));

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/oracle/i);
  expect(linkElement).toBeInTheDocument();
});
