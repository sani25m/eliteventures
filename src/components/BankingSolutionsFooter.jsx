import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";

export default function BankingSolutionsFooter() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <CompanyLogo imgClassName="max-h-10" />
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Bespoke banking and corporate structuring for the global elite. Facilitating financial excellence since 2012.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-accent-gold uppercase tracking-widest text-xs">Solutions</h5>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/banking-solutions#corporate" className="hover:text-white transition-colors">Corporate Accounts</Link></li>
              <li><Link to="/banking-solutions#individual" className="hover:text-white transition-colors">Private Banking</Link></li>
              <li><a href="/banking-solutions#compliance" className="hover:text-white transition-colors">Asset Protection</a></li>
              <li><a href="/banking-solutions" className="hover:text-white transition-colors">Fintech Banking</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-accent-gold uppercase tracking-widest text-xs">Support</h5>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="/banking-solutions#form" className="hover:text-white transition-colors">Pre-qualification</a></li>
              <li><a href="/banking-solutions#compliance" className="hover:text-white transition-colors">Compliance Hub</a></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Help Desk</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-accent-gold uppercase tracking-widest text-xs">Contact</h5>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">mail</span>
                elite@ventures.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">call</span>
                +1 (800) ELITE-VIP
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">pin_drop</span>
                Financial District, NY
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <Link to="/#" className="text-xs text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/#" className="text-xs text-white/40 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/#" className="text-xs text-white/40 hover:text-white transition-colors">AML Policy</Link>
          </div>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Elite Ventures Banking Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
