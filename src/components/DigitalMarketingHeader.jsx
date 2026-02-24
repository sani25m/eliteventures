import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function DigitalMarketingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <CompanyLogo imgClassName="max-h-10" />
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-accent-gold transition-colors">
              Home
            </Link>
            <Link to="/#services" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-accent-gold transition-colors">
              Services
            </Link>
            <Link to="/#services" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-accent-gold transition-colors">
              Case Studies
            </Link>
            <Link to="/about-us" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-accent-gold transition-colors">
              About
            </Link>
            <Link
              to="/contact-us"
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:bg-navy-muted transition-all shadow-lg shadow-primary/20"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
