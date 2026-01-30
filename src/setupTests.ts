import { vi } from "vitest";

// Mock CSS/SCSS imports
vi.mock("*.scss", () => ({}));

// Mock image imports
vi.mock("*.png", () => ({}));
vi.mock("*.jpg", () => ({}));
vi.mock("*.svg", () => ({}));
