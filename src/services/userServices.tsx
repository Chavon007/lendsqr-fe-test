import type { User } from "../types/user";

const API_URL =
  "https://raw.githubusercontent.com/chavon007/lendsqr-fe-test/main/db.json";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await res.json();
    return data.users; 
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = (users: User[], id: string): User | undefined => {
  return users.find(user => user.id === id);
};


export const saveUserToStorage = (user: User): void => {
  localStorage.setItem(`user_${user.id}`, JSON.stringify(user));
};

export const getUserFromStorage = (id: string): User | null => {
  const stored = localStorage.getItem(`user_${id}`);
  return stored ? JSON.parse(stored) : null;
};