import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { fetchUsers } from "../services/userServices";

export function useUser(id?: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers();
        const foundUser = data.find((u) => String(u.id) === id);
        setUser(foundUser || null);
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
