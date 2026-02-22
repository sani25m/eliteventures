import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function ProjectManagementFooter() {
  return (
    <footer className="bg-background-dark text-slate-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <CompanyLogo imgClassName="max-h-10 brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Pioneering high-impact strategic advisory and institutional project management for the world&apos;s most ambitious leaders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all" aria-label="Web">
                <span className="material-symbols-outlined text-xl">language</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all" aria-label="Person">
                <span className="material-symbols-outlined text-xl">person</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all" aria-label="Share">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              <li><Link to="/project-management-advisory#services" className="hover:text-accent-gold transition-colors">Strategic Advisory</Link></li>
              <li><a href="#methodology" className="hover:text-accent-gold transition-colors">Project Portfolio</a></li>
              <li><Link to="/contact-us" className="hover:text-accent-gold transition-colors">Investment Portals</Link></li>
              <li><a href="#methodology" className="hover:text-accent-gold transition-colors">Global Insights</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Global Offices</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-gold text-sm mt-0.5 flex-shrink-0">location_on</span>
                <span>London (HQ)<br />Mayfair Financial District</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-gold text-sm mt-0.5 flex-shrink-0">location_on</span>
                <span>Dubai<br />DIFC Business Hub</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-gold text-sm mt-0.5 flex-shrink-0">location_on</span>
                <span>Singapore<br />Marina Bay Centre</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-6">Join Our Insights</h5>
            <p className="text-xs mb-4">Subscribe to our quarterly strategic briefing.</p>
            <form className="flex overflow-hidden rounded-lg bg-white/5 border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="bg-transparent border-none text-xs w-full focus:ring-0 px-4 py-2 text-white placeholder:text-slate-500" />
              <button type="submit" className="bg-accent-gold text-primary p-2">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">© {new Date().getFullYear()} Elite Ventures Global. All rights reserved.</p>
          <div className="flex gap-8 text-xs">
            <Link to="/#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/#" className="hover:text-white transition-colors">Regulatory Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
