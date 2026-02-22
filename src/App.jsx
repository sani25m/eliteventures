import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import BankingSolutionsPage from "./pages/BankingSolutionsPage";
import CompanyFormationPage from "./pages/CompanyFormationPage";
import LuxuryTourismPage from "./pages/LuxuryTourismPage";
import ProjectManagementPage from "./pages/ProjectManagementPage";
import TaxCompliancePage from "./pages/TaxCompliancePage";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company-formation" element={<CompanyFormationPage />} />
        <Route path="/banking-solutions" element={<BankingSolutionsPage />} />
        <Route path="/tax-compliance" element={<TaxCompliancePage />} />
        <Route path="/project-management-advisory" element={<ProjectManagementPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/luxury-tourism" element={<LuxuryTourismPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
