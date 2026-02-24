import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function TaxComplianceFooter() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-8">
              <CompanyLogo imgClassName="max-h-10" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium corporate services, tax advisory, and compliance management for elite enterprises across the MENA region.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all" aria-label="Web">
                <span className="material-symbols-outlined text-xl">language</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all" aria-label="Share">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all" aria-label="Email">
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent-gold uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/tax-compliance#services" className="hover:text-white transition-colors">Corporate Tax Registration</Link></li>
              <li><Link to="/tax-compliance#services" className="hover:text-white transition-colors">VAT & Indirect Tax</Link></li>
              <li><a href="#compliance" className="hover:text-white transition-colors">Audit & Assurance</a></li>
              <li><Link to="/company-formation" className="hover:text-white transition-colors">Business Setup</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#compliance" className="hover:text-white transition-colors">Knowledge Base</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors">UAE Tax Guidelines</a></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-8 text-accent-gold uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-gold text-sm flex-shrink-0 mt-0.5">location_on</span>
                <span>Elite Tower, Floor 42,<br />Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-gold text-sm flex-shrink-0">phone</span>
                +971 4 000 0000
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-gold text-sm flex-shrink-0">mail</span>
                contact@eliteventures.ae
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 text-center text-xs text-slate-500 font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Elite Ventures Corporate Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
