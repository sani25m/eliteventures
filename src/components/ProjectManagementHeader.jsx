import { Link } from "react-router-dom";

export default function ProjectManagementHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-10 flex items-center justify-center rounded-lg bg-primary text-accent-gold">
            <span className="material-symbols-outlined text-3xl">account_balance</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary dark:text-white text-xl font-black tracking-tight leading-none">
              ELITE VENTURES
            </span>
            <span className="text-[10px] text-accent-gold font-bold uppercase tracking-[0.2em] leading-none mt-1">
              Global Advisory
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold text-primary/70 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/project-management-advisory" className="text-sm font-semibold text-primary dark:text-white border-b-2 border-accent-gold pb-1">
            Advisory
          </Link>
          <a href="#services" className="text-sm font-semibold text-primary/70 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors">
            Projects
          </a>
          <a href="#methodology" className="text-sm font-semibold text-primary/70 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors">
            Insights
          </a>
          <Link to="/about-us" className="text-sm font-semibold text-primary/70 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors">
            About
          </Link>
        </nav>
        <Link
          to="/contact-us"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
        >
          Request Session
        </Link>
      </div>
    </header>
  );
}
