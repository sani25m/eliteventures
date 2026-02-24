import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function TaxComplianceHeader() {
  return (
    <header className="fixed w-full z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-primary/10 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <CompanyLogo imgClassName="max-h-10" />
        <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider">
          <Link to="/" className="text-primary dark:text-slate-300 hover:text-accent-gold transition-colors">
            Home
          </Link>
          <Link to="/tax-compliance" className="text-accent-gold border-b-2 border-accent-gold pb-1">
            Tax & Compliance
          </Link>
          <Link to="/project-management-advisory" className="text-primary dark:text-slate-300 hover:text-accent-gold transition-colors">
            Advisory
          </Link>
          <Link to="/contact-us" className="text-primary dark:text-slate-300 hover:text-accent-gold transition-colors">
            Contact
          </Link>
        </nav>
        <Link
          to="/contact-us"
          className="bg-primary text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all border border-primary"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
