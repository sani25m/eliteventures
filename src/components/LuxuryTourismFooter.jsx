import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

export default function LuxuryTourismFooter() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <LogoIcon className="w-8 h-8 text-white" />
            <h2 className="text-xl font-black tracking-tight uppercase">ELITE VENTURES</h2>
          </div>
          <p className="text-white/60 leading-relaxed text-sm">
            Redefining luxury travel through curated experiences, private access, and unrivaled local expertise since 1998.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Explore</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link to="/luxury-tourism#itinerary" className="hover:text-emerald-400 transition-colors">Our Destinations</Link></li>
            <li><Link to="/luxury-tourism#gallery" className="hover:text-emerald-400 transition-colors">Private Villas</Link></li>
            <li><Link to="/contact-us" className="hover:text-emerald-400 transition-colors">Corporate Travel</Link></li>
            <li><Link to="/luxury-tourism#partners" className="hover:text-emerald-400 transition-colors">Partner Program</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-400 flex-shrink-0">mail</span>
              <span>concierge@eliteventures.com</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-400 flex-shrink-0">call</span>
              <span>+1 (800) ELITE-VIP</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-400 flex-shrink-0">location_on</span>
              <span>London • Colombo • Singapore</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6">Follow Our Journeys</h4>
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-all" aria-label="Web">
              <span className="material-symbols-outlined text-base">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-all" aria-label="Gallery">
              <span className="material-symbols-outlined text-base">camera</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-all" aria-label="Share">
              <span className="material-symbols-outlined text-base">share</span>
            </a>
          </div>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Elite Ventures Luxury Division. All rights reserved.</p>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
        <div className="flex gap-6">
          <Link to="/#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/#" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
        <div>Member of Global Luxury Travel Network</div>
      </div>
    </footer>
  );
}
