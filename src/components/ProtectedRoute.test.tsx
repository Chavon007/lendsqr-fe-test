import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/protectedRoute";

const TestProtectedPage = () => <div>Protected Page</div>;

describe("ProtectedRoute Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("allows access when authenticated", () => {
    localStorage.setItem("isAuthenticated", "true");

    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/protected" element={<TestProtectedPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Protected Page")).toBeInTheDocument();
  });

  test("redirects when not authenticated", () => {
    localStorage.removeItem("isAuthenticated");

    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <Routes>
          <Route path="/login" element={<div>Login Required</div>} />
          <Route element={<ProtectedRoute />}>
            <Route path="/protected" element={<TestProtectedPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText("Protected Page")).not.toBeInTheDocument();
  });
});