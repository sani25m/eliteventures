import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

export default function LuxuryTourismHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="text-primary dark:text-white">
          <LogoIcon className="w-8 h-8 text-primary dark:text-white" />
        </div>
        <h2 className="text-primary dark:text-white text-xl font-black tracking-tight uppercase">
          ELITE VENTURES
        </h2>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#itinerary" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-wider">
          Luxury Sri Lanka
        </a>
        <a href="#itinerary" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-wider">
          Itinerary
        </a>
        <a href="#gallery" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-wider">
          Villas
        </a>
        <a href="#partners" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-wider">
          Partners
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          to="/contact-us"
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          Request Quote
        </Link>
        <div className="hidden sm:block w-10 h-10 rounded-full border-2 border-primary/20 bg-slate-200 dark:bg-slate-700 bg-cover bg-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
