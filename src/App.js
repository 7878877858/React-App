import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />   {/* Home page */}
        <Route path="/ContactUs" element={<ContactUs />} />  {/* Contact page */}
        <Route path="/AboutUs" element={<AboutUs />} />  {/* Contact page */}
        <Route path="/FAQ" element={<FAQ />} />  {/* Contact page */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
