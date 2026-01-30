import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainUsers from "./users";

test("renders Users table", () => {
  render(<BrowserRouter><MainUsers /></BrowserRouter>);
  expect(screen.getByText(/loading users/i)).toBeInTheDocument();
});