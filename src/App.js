import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import Refundpolicy from "./Components/RefundPolicy/RefundPolicy";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Login from "./Components/Authentication/Login";
import LoginCheck from "./Components/Authentication/LoginCheck";
import LoginOtp from "./Components/Authentication/LoginOtp";
import { AuthProvider } from "./Api/Authentication/AuthContext";
import Register from "./Components/Authentication/Register";
import Shopping from "./Components/Shopping/Shopping";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout />
    </Router>
  );
}
function MainLayout() {
  const location = useLocation();
 const hideLayoutRoutes = [
    "/login",
    "/register",
    "/otp",
    "/logincheck",
    "/shopping" 
  ];
  const hideLayout = hideLayoutRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <AuthProvider>
        {!hideLayout && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/Refundpolicy" element={<Refundpolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logincheck" element={<LoginCheck />} />
          <Route path="/otp" element={<LoginOtp />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shopping" element={<Shopping/>}/>
        </Routes>
        {!hideLayout && <Footer />}
      </AuthProvider>
    </>
  );
}
export default App;
