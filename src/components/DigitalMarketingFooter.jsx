import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function DigitalMarketingFooter() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <CompanyLogo imgClassName="max-h-10" />
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              The UAE&apos;s premier digital growth partner for luxury brands, real estate firms, and high-performance enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-gold transition-colors" aria-label="Web">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="mailto:contact@eliteventures.ae" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-gold transition-colors" aria-label="Email">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a href="tel:+9714000000" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-gold transition-colors" aria-label="Call">
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">Services</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/digital-marketing#services" className="hover:text-white transition-colors">SEO Mastery</Link></li>
              <li><Link to="/digital-marketing#services" className="hover:text-white transition-colors">Performance Ads</Link></li>
              <li><Link to="/digital-marketing#services" className="hover:text-white transition-colors">UX/UI Design</Link></li>
              <li><Link to="/digital-marketing#services" className="hover:text-white transition-colors">Content Strategy</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">Company</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about-us" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div className="col-span-2 space-y-6">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold">Global Presence</h5>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="material-symbols-outlined text-accent-gold flex-shrink-0">location_on</span>
              <div>
                <p className="text-xs font-bold">Elite Headquarters</p>
                <p className="text-xs text-white/50 mt-1">Downtown Dubai, Burj Khalifa District, UAE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium uppercase tracking-widest text-white/40">
          <p>© {new Date().getFullYear()} Elite Ventures International. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/#" className="hover:text-accent-gold transition-colors">Privacy Policy</Link>
            <Link to="/#" className="hover:text-accent-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
