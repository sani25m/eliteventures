import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company-formation" element={<PlaceholderPage title="Company Formation" />} />
        <Route path="/banking-solutions" element={<PlaceholderPage title="Banking Solutions" />} />
        <Route path="/tax-compliance" element={<PlaceholderPage title="Tax & Compliance" />} />
        <Route path="/project-management-advisory" element={<PlaceholderPage title="Project Management" />} />
        <Route path="/digital-marketing" element={<PlaceholderPage title="Digital Marketing" />} />
        <Route path="/luxury-tourism" element={<PlaceholderPage title="Luxury Tourism" />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
