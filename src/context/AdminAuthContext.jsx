import { createContext, useContext, useState, useCallback } from "react";

const TOKEN_KEY = "eliteventures_admin_token";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [token, setTokenState] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null
  );

  const setToken = useCallback((t) => {
    setTokenState(t);
    if (typeof window !== "undefined") {
      if (t) localStorage.setItem(TOKEN_KEY, t);
      else localStorage.removeItem(TOKEN_KEY);
    }
  }, []);

  const logout = useCallback(() => setToken(null), [setToken]);

  return (
    <AdminAuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
