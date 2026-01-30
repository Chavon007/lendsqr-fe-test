import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Users from "./Users";

test("renders Users table", () => {
  render(<BrowserRouter><Users /></BrowserRouter>);
  expect(screen.getByText(/loading users/i)).toBeInTheDocument();
});
