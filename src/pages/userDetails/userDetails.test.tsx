import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetails from "../userDetails/userDetails";
import { vi } from "vitest";
import type { User } from "../../types/user";

// Mock the userServices module
vi.mock("../../services/userServices", () => ({
  fetchUsers: vi.fn(),
  getUserFromStorage: vi.fn(),
  saveUserToStorage: vi.fn(),
  getUserById: vi.fn(),
}));

// Mock react-icons
vi.mock("react-icons/io", () => ({
  IoIosArrowRoundBack: () => <span>BackIcon</span>,
}));

vi.mock("react-icons/cg", () => ({
  CgProfile: () => <span>ProfileIcon</span>,
}));

vi.mock("react-icons/ai", () => ({
  AiFillStar: () => <span>FilledStar</span>,
  AiOutlineStar: () => <span>OutlineStar</span>,
}));

const mockUser: User = {
  id: "1",
  organization: "Lendstar",
  fullName: "John Doe",
  username: "johndoe",
  email: "johndoe@example.com",
  phoneNumber: "(879) 450-3204",
  bvn: "83840382360",
  status: "Active",
  tier: 3,
  accountBalance: "₦200,000.00",
  accountNumber: "1234567890", 
  bankName: "GTBank",
  personalInfo: {
    maritalStatus: "Single",
    children: 0,
    residenceType: "Rented Apartment"
  },
  educationEmployment: {
    level: "B.Sc",
    employmentStatus: "Employed",
    sector: "FinTech",
    duration: "2 years",
    officeEmail: "johndoe@company.com",
    monthlyIncome: "₦200,000.00",
    loanRepayment: "₦50,000.00"
  },
  socials: {
    twitter: "@johndoe",
    facebook: "John Doe",
    instagram: "@johndoe"
  },
  guarantors: [
    {
      fullName: "Jane Smith",
      phoneNumber: "(923) 501-2942",
      email: "janesmith@example.com",
      relationship: "Sister"
    }
  ],
  dateJoined: "Nov 14, 2024 02:29 AM",
  gender: "Male"
};


test("renders User Details page", async () => {
  const { getUserFromStorage } = await import("../../services/userServices");
  
  // Mock getUserFromStorage to return our mock user
  vi.mocked(getUserFromStorage).mockReturnValue(mockUser);

  render(
    <MemoryRouter initialEntries={["/user/1"]}>
      <Routes>
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </MemoryRouter>
  );

  // Wait for the component to render with the mocked data
  const backLink = await screen.findByText(/back to users/i);
  expect(backLink).toBeInTheDocument();
});