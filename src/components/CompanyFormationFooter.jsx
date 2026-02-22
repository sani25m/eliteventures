import { Link } from "react-router-dom";

export default function CompanyFormationFooter() {
  return (
    <footer className="bg-primary pt-20 pb-10 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-8 bg-accent-gold flex items-center justify-center rounded text-primary">
                <span className="material-symbols-outlined text-sm font-bold">account_balance</span>
              </div>
              <span className="text-xl font-black text-white">
                ELITE<span className="text-accent-gold">VENTURES</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              UAE&apos;s premier boutique consultancy for business formation and corporate services. Trusted by 2000+ entrepreneurs worldwide.
            </p>
          </div>
          <div>
            <h6 className="text-white font-bold mb-6">Setup Types</h6>
            <ul className="space-y-4 text-sm">
              <li><Link to="/company-formation#mainland" className="hover:text-accent-gold transition-colors">Dubai Mainland</Link></li>
              <li><Link to="/company-formation#freezone" className="hover:text-accent-gold transition-colors">Freezone Licenses</Link></li>
              <li><Link to="/company-formation#offshore" className="hover:text-accent-gold transition-colors">Offshore Solutions</Link></li>
              <li><a href="/company-formation" className="hover:text-accent-gold transition-colors">Holding Companies</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-bold mb-6">Support</h6>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact-us" className="hover:text-accent-gold transition-colors">Visa Services</Link></li>
              <li><Link to="/banking-solutions" className="hover:text-accent-gold transition-colors">Corporate Banking</Link></li>
              <li><Link to="/tax-compliance" className="hover:text-accent-gold transition-colors">VAT Registration</Link></li>
              <li><Link to="/contact-us" className="hover:text-accent-gold transition-colors">Office Space</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-bold mb-6">Contact Us</h6>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent-gold text-lg flex-shrink-0">location_on</span>
                Level 41, Emirates Towers, Sheikh Zayed Rd, Dubai
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-gold text-lg flex-shrink-0">call</span>
                +971 4 000 0000
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent-gold text-lg flex-shrink-0">schedule</span>
                Mon - Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Elite Ventures Business Setup Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
