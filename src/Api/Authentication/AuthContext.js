// // AuthContext.js
// import { createContext, useState, useContext } from "react";

// const AuthContext = createContext();
// const baseUrl = "https://tradgo.in/"; // તારો domain

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("userData")) || null
//   );
//   const profilePicUrl = user?.profile_pic
//     ? baseUrl + user.profile_pic
//     : null;
//   return (
//     <AuthContext.Provider value={{ user, setUser,profilePicUrl  }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// AuthContext.js
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();
const baseUrl = "https://tradgo.in/"; // તારો domain

export const AuthProvider = ({ children }) => {
  // 👤 User
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  // 🛍️ Shopping data, orders, cart etc. (future use)
  const [shoppingData, setShoppingData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const [giftCardData, setGiftCardData] = useState([]);
  // 👤 Profile pic URL
  const profilePicUrl = user?.profile_pic ? baseUrl + user.profile_pic : null;

  // 🔥 Reset everything on logout
  const resetApp = () => {
    localStorage.removeItem("userData"); // clear userData
    setUser(null);
    setShoppingData([]);
    setGiftCardData([]);
    setOrders([]);
    setCart([]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        profilePicUrl,
        shoppingData,
        setShoppingData,
        giftCardData,
        setGiftCardData,
        orders,
        setOrders,
        cart,
        setCart,
        resetApp, // expose reset
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
