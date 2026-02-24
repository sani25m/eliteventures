import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function BankingSolutionsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <CompanyLogo imgClassName="max-h-10" />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#corporate" className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors">
              Corporate
            </a>
            <a href="#individual" className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors">
              Individual
            </a>
            <a href="#compliance" className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors">
              Compliance
            </a>
            <Link to="/contact-us" className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors">
              Contact
            </Link>
            <Link
              to="/contact-us"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
