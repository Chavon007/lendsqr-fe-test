# Lendsqr Frontend Engineering Assessment

A responsive web application built for Lendsqr's frontend engineering assessment. This application demonstrates proficiency in React, TypeScript, and SCSS by implementing a user management dashboard with login, user listing, and detailed user information pages.

## Live Demo

## Deployed URL: [https://salvation-azuh-lendsqr-fe-test.vercel.app/](https://salvation-azuh-lendsqr-fe-test.vercel.app/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Testing](#testing)
- [Design Decisions](#design-decisions)
- [Challenges & Solutions](#challenges--solutions)

## Features

### 1. Login Page

- Email and password authentication
- Form validation
- No registration required - any valid email format and password grants access
- Responsive design matching Figma specifications

### 2. Users Dashboard Page

- Displays a list of 500 users fetched from mock API
- User filtering and search functionality
- Pagination for better performance
- Status indicators for each user
- Responsive table layout

### 3. User Details Page

- Comprehensive user information display
- Data retrieved from localStorage for optimal performance
- Multiple information sections:
  - Personal Information
  - Education & Employment
  - Socials
  - Guarantor Information
- User tier rating display
- Account balance and bank details
- Action buttons (Blacklist/Activate user)

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** SCSS
- **Routing:** React Router DOM
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/chavon007/lendsqr-fe-test.git
cd lendsqr-fe-test
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🔌 API Integration

### Mock API Setup

I created a mock API with 500 user records using [json-generator.com](https://json-generator.com). The data structure includes:

- User personal information
- Account details
- Education and employment information
- Social media handles
- Guarantor information

**API Endpoint:**

```
https://raw.githubusercontent.com/chavon007/lendsqr-fe-test/main/db.json
```

Initially, I attempted to use [mocky.io](https://mocky.io) to host the mock data, but encountered reliability issues. As a solution, I uploaded the generated JSON file to my GitHub repository and used the raw content URL to fetch the data. This approach proved to be more stable and ensures the API is always accessible.

### Data Storage

- **localStorage** is used to cache user data for faster retrieval
- When a user clicks on a specific user, their details are stored in localStorage with the key pattern: `user_{id}`
- On the user details page, the app first checks localStorage before making an API call
- This approach significantly improves performance and reduces unnecessary API calls

## Testing

The application includes comprehensive unit tests for all major components:

- **Login Page Tests:** Form validation and rendering
- **Users Page Tests:** User list rendering and data display
- **User Details Page Tests:** User information display and data fetching

### Testing Libraries Used:

- Vitest - Fast unit test framework
- React Testing Library - Component testing utilities
- jsdom - DOM simulation for tests

### Running Tests:

```bash
npm test
```

All tests include both positive and negative scenarios to ensure robust functionality.

## Design Decisions

### 1. **Vite over Create React App**

I chose Vite as the build tool because of its:

- Faster development server startup
- Hot Module Replacement (HMR) performance
- Optimized production builds
- Better TypeScript support out of the box

### 2. **SCSS Architecture**

- Component-scoped SCSS files for better maintainability
- BEM (Block Element Modifier) naming convention for CSS classes
- Mobile-first approach for media queries

### 3. **No State Management Library**

For this project's scope, I opted not to use Redux or other state management libraries because:

- The application state is relatively simple
- React's built-in hooks (useState, useEffect) are sufficient
- LocalStorage serves as our persistent state layer
- Avoiding unnecessary complexity keeps the codebase clean and maintainable

### 4. **Custom Hooks**

Created a `useUser` hook to encapsulate user data fetching logic, making it:

- Reusable across components
- Easier to test
- Centralized for better maintenance

### 5. **Type Safety**

Comprehensive TypeScript interfaces ensure:

- Type checking at compile time
- Better IDE autocomplete
- Self-documenting code
- Reduced runtime errors

## Challenges & Solutions

### Challenge 1: Responsive Design with SCSS

**Problem:** Implementing responsive design using pure SCSS was more time-consuming compared to utility-first frameworks like Tailwind CSS.

**Solution:**

- Created reusable SCSS mixins for breakpoints
- Used CSS Grid and Flexbox extensively
- Implemented mobile-first approach
- Tested across multiple device sizes

### Challenge 2: Mock API Hosting

**Problem:** Initially tried using mocky.io to host the 500-user dataset, but the service was unreliable and sometimes returned errors.

**Solution:**

- Uploaded the JSON file to GitHub repository
- Used the raw content URL from GitHub
- This provides a stable, always-accessible API endpoint
- No rate limiting or downtime issues

### Challenge 3: Performance with 500 Users

**Problem:** Loading and rendering 500 users could impact performance.

**Solution:**

- Implemented pagination to show limited users per page
- Used localStorage caching to avoid redundant API calls
- Lazy loaded user details only when needed
- Optimized re-renders using React best practices

### Challenge 4: Testing with External Dependencies

**Problem:** Testing components that depend on localStorage and React Router required proper mocking.

**Solution:**

- Created mock implementations for localStorage
- Used MemoryRouter for testing route-dependent components
- Mocked service layer functions
- Ensured tests are isolated and don't affect each other

---

**GitHub Repository:** [chavon007/lendsqr-fe-test](https://github.com/chavon007/lendsqr-fe-test)
