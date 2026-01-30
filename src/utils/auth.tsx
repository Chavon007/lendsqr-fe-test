
export const isAuthenticated = (): boolean => {
  return localStorage.getItem("isAuthenticated") === "true";
};


export const login = (email: string): void => {
  localStorage.setItem("isAuthenticated", "true");
  localStorage.setItem("userEmail", email);
};


export const logout = (): void => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("userEmail");
};


export const getCurrentUserEmail = (): string | null => {
  return localStorage.getItem("userEmail");
};