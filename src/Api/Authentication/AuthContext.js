// AuthContext.js
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();
const baseUrl = "https://tradgo.in/"; // તારો domain

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );
  const profilePicUrl = user?.profile_pic
    ? baseUrl + user.profile_pic
    : null;
  return (
    <AuthContext.Provider value={{ user, setUser,profilePicUrl  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
