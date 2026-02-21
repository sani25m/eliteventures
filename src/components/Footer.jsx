import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

const QUICK_LINKS = [
  { label: "Our Story", href: "/about-us" },
  { label: "Success Cases", href: "#" },
  { label: "Tax & Compliance Hub", href: "/tax-compliance" },
  { label: "UAE Freezone Guide", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const SERVICE_LINKS = [
  { label: "Business Formation", href: "/company-formation" },
  { label: "Corporate Banking", href: "/banking-solutions" },
  { label: "Project Management", href: "/project-management-advisory" },
  { label: "Tax & VAT Advisory", href: "/tax-compliance" },
  { label: "Luxury Tourism", href: "/luxury-tourism" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded">
                <LogoIcon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-black tracking-tight uppercase">
                Elite Ventures
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The UAE&apos;s premier consultancy for business formation, corporate banking, and luxury tourism services. Empowering global expansion through local excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Share"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
                aria-label="Like"
              >
                <span className="material-symbols-outlined text-sm">thumb_up</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="hover:text-accent-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="hover:text-accent-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-accent-gold flex-shrink-0">
                  location_on
                </span>
                <span>
                  Level 24, Burj Khalifa District,
                  <br />
                  Downtown Dubai, UAE
                </span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-accent-gold flex-shrink-0">
                  call
                </span>
                <span>+971 4 000 0000</span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-accent-gold flex-shrink-0">
                  mail
                </span>
                <span>contact@eliteventures.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Elite Ventures Consultancy. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=80&h=40&fit=crop"
              alt="Partner"
              className="opacity-30 grayscale hover:opacity-100 transition-all h-8 object-contain"
            />
            <img
              src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=80&h=40&fit=crop"
              alt="Partner"
              className="opacity-30 grayscale hover:opacity-100 transition-all h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
