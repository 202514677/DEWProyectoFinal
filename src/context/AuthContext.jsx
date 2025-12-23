import { createContext, useContext, useState } from "react";
import { users } from "../data/users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function login(username, password) {
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return false;
    setUser(found);
    localStorage.setItem("user", JSON.stringify(found));
    return true;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
