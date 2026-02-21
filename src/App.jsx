import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
        <Route path="/about-us" element={<PlaceholderPage title="About Us" />} />
        <Route path="/contact-us" element={<PlaceholderPage title="Contact Us" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
