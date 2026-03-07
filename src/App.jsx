import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { UserAuthProvider } from "./context/UserAuthContext";
import AdminLayout from "./components/admin/AdminLayout";
import AdminGuard from "./components/admin/AdminGuard";
import VisitTracker from "./components/VisitTracker";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminSubmissionsPage from "./pages/admin/AdminSubmissionsPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import BankingSolutionsPage from "./pages/BankingSolutionsPage";
import CompanyFormationPage from "./pages/CompanyFormationPage";
import LuxuryTourismPage from "./pages/LuxuryTourismPage";
import ProjectManagementPage from "./pages/ProjectManagementPage";
import TaxCompliancePage from "./pages/TaxCompliancePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProfilePage from "./pages/ProfilePage";

function AppContent() {
  return (
    <>
      <VisitTracker />
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

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <AdminGuard>
              <AdminLayout />
            </AdminGuard>
          }
        >
          <Route index element={<AdminDashboardPage />} />
          <Route path="submissions" element={<AdminSubmissionsPage />} />
          <Route path="submissions/:source" element={<AdminSubmissionsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <UserAuthProvider>
          <AppContent />
        </UserAuthProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
