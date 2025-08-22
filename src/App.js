import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import Refundpolicy from "./Components/RefundPolicy/RefundPolicy";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <Router>
    <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={<Main />} />   
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Refundpolicy" element={<Refundpolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
