import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import { useUserAuth } from "../context/UserAuthContext";

export default function ContactPageHeader() {
  const { user, signOut } = useUserAuth();
  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split("@")[0] || "Profile";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-background-dark/90 backdrop-blur-md px-6 py-3 lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <CompanyLogo imgClassName="max-h-10" />
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
          {user ? (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 min-w-[100px] rounded-lg bg-primary/10 dark:bg-primary/20 px-4 py-2.5 text-sm font-bold text-primary dark:text-white transition-transform active:scale-95 hover:bg-primary/20 dark:hover:bg-primary/30"
                title={user.email}
              >
                <span className="truncate max-w-[120px]">{displayName}</span>
              </Link>
              <button
                type="button"
                onClick={() => signOut()}
                className="hidden lg:block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex min-w-[120px] items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-transform active:scale-95 hover:bg-primary/90"
              >
                Client Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
