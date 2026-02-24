import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function AboutPageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <CompanyLogo imgClassName="max-h-10" />
          <nav className="hidden md:flex space-x-10 items-center">
            <Link to="/" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="text-sm font-semibold text-primary border-b-2 border-accent-gold pb-1 dark:text-white">
              About Us
            </Link>
            <Link to="/#services" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/#services" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link to="/contact-us" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 transition-all">
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
