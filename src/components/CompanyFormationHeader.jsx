import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function CompanyFormationHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <CompanyLogo imgClassName="max-h-10" />
          <nav className="hidden md:flex space-x-8">
            <a href="#mainland" className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors">
              Mainland
            </a>
            <a href="#freezone" className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors">
              Freezone
            </a>
            <a href="#offshore" className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors">
              Offshore
            </a>
            <Link to="/contact-us" className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors">
              PRO Services
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              to="/contact-us"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
