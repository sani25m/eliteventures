import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function ContactPageFooter() {
  return (
    <footer className="bg-primary pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <CompanyLogo imgClassName="max-h-10" />
            </div>
            <p className="text-sm leading-relaxed text-blue-100/60">
              Bridging global capital with revolutionary opportunities. Expert advisors for the next generation of investment excellence.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-accent-gold" aria-label="Share">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-accent-gold" aria-label="Groups">
                <span className="material-symbols-outlined text-xl">groups</span>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-accent-gold" aria-label="Public">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-gold">Quick Links</h3>
            <ul className="mt-6 space-y-4">
              <li><Link to="/#services" className="text-sm text-blue-100/60 hover:text-white transition-colors">Our Portfolio</Link></li>
              <li><Link to="/#services" className="text-sm text-blue-100/60 hover:text-white transition-colors">Investment Strategy</Link></li>
              <li><Link to="/contact-us" className="text-sm text-blue-100/60 hover:text-white transition-colors">Client Portal</Link></li>
              <li><Link to="/#" className="text-sm text-blue-100/60 hover:text-white transition-colors">News & Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-gold">Legal</h3>
            <ul className="mt-6 space-y-4">
              <li><Link to="/#" className="text-sm text-blue-100/60 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/#" className="text-sm text-blue-100/60 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/#" className="text-sm text-blue-100/60 hover:text-white transition-colors">Regulatory Disclosure</Link></li>
              <li><Link to="/#" className="text-sm text-blue-100/60 hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-gold">Newsletter</h3>
            <p className="mt-6 text-sm text-blue-100/60">Stay updated with market insights and new venture opportunities.</p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-l-lg border-none bg-white/10 p-3 text-sm text-white placeholder:text-white/40 focus:ring-1 focus:ring-accent-gold focus:outline-none"
              />
              <button type="submit" className="rounded-r-lg bg-accent-gold px-4 py-3 text-primary transition-colors hover:bg-accent-gold/90 font-bold">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </form>
          </div>
        </div>
        <div className="mt-20 border-t border-white/10 pt-8 text-center lg:flex lg:items-center lg:justify-between lg:text-left">
          <p className="text-xs text-blue-100/40">
            © {new Date().getFullYear()} Elite Ventures Global. All rights reserved. Registered in Dubai International Financial Centre.
          </p>
          <p className="mt-4 text-xs text-blue-100/40 lg:mt-0">Built with Excellence in Dubai.</p>
        </div>
      </div>
    </footer>
  );
}
