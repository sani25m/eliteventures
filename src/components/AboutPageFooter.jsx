import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function AboutPageFooter() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-8">
              <CompanyLogo imgClassName="max-h-10" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Navigating the complexities of global markets with precision, integrity, and strategic foresight.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/#services" className="hover:text-white transition-colors">Our Portfolio</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Global Services</Link></li>
              <li><Link to="/about-us" className="hover:text-white transition-colors">Investment Criteria</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent-gold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm flex-shrink-0">location_on</span>
                88 Financial District, London
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm flex-shrink-0">mail</span>
                info@eliteventures.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm flex-shrink-0">call</span>
                +44 (0) 20 7946 0123
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent-gold">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe for quarterly market insights.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border-none rounded-l-lg px-4 py-2 w-full text-white placeholder:text-slate-500 focus:ring-1 focus:ring-accent-gold focus:outline-none"
              />
              <button type="submit" className="bg-accent-gold text-primary font-bold px-4 py-2 rounded-r-lg hover:bg-accent-gold/90 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Elite Ventures Strategic Partners Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link to="/#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/#" className="hover:text-white transition-colors">Regulatory Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
