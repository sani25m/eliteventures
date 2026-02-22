import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function ContactPageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-background-dark/90 backdrop-blur-md px-6 py-3 lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <CompanyLogo imgClassName="max-h-10 invert dark:invert-0" />
        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/about-us" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
            About
          </Link>
          <Link to="/#services" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
            Services
          </Link>
          <Link to="/#services" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link to="/contact-us" className="text-sm font-bold text-primary dark:text-white border-b-2 border-accent-gold pb-0.5">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/contact-us"
            className="hidden lg:flex min-w-[120px] items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-transform active:scale-95 hover:bg-primary/90"
          >
            Client Login
          </Link>
          <div className="size-10 rounded-full border-2 border-accent-gold/30 bg-slate-100 dark:bg-slate-800 p-0.5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80"
              alt="User profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
