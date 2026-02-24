import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

const MEGA_MENU_ITEMS = [
  { icon: "domain", title: "Business Formation", description: "Mainland, Freezone & Offshore setup.", to: "/company-formation" },
  { icon: "account_balance", title: "Corporate Banking", description: "Strategic banking partner matching.", to: "/banking-solutions" },
  { icon: "receipt_long", title: "Tax Advisory", description: "VAT & Corporate tax compliance.", to: "/tax-compliance" },
  { icon: "assignment", title: "Project Management", description: "End-to-end operational execution.", to: "/project-management-advisory" },
  { icon: "campaign", title: "Marketing", description: "Digital growth and brand strategy.", to: "/digital-marketing" },
  { icon: "diamond", title: "Luxury Tourism", description: "Exclusive VIP travel & experiences.", to: "/luxury-tourism" },
];

export default function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMegaMenuEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setMegaMenuOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <CompanyLogo className="group" imgClassName="max-h-10" />

          <nav className="hidden lg:flex items-center space-x-8">
            <div
              className="relative group"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors py-8"
                aria-expanded={megaMenuOpen}
                aria-haspopup="true"
              >
                Services
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              {/* Mega menu: appears below Services, over hero; pointer-friendly open/close */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px] transition-[opacity,visibility] duration-200 ${megaMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                aria-hidden={!megaMenuOpen}
              >
                <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-xl border border-primary/5 p-6 grid grid-cols-2 gap-6">
                  {MEGA_MENU_ITEMS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors text-left"
                      onClick={() => setMegaMenuOpen(false)}
                    >
                      <span className="material-symbols-outlined text-accent-gold flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-bold text-sm text-primary dark:text-white">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/about-us"
              className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="text-sm font-semibold text-primary dark:text-white hover:text-accent-gold transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact-us"
              className="hidden md:flex bg-primary text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Book Free Consultation
            </Link>
            <button type="button" className="lg:hidden p-2 text-primary dark:text-white" aria-label="Menu">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
