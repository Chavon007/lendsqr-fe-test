import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { fetchUsers, getUserFromStorage, saveUserToStorage } from "../services/userServices";

export function useUser(id?: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      setLoading(true);
      try {
        // Check localStorage first
        const storedUser = getUserFromStorage(id);
        if (storedUser) {
          setUser(storedUser);
          setLoading(false);
          return;
        }

        // If not in storage, fetch from API
        const data = await fetchUsers();
        const foundUser = data.find((u) => String(u.id) === id);
        
        if (foundUser) {
          saveUserToStorage(foundUser);
          setUser(foundUser);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading };
}