import { Link } from "react-router-dom";
import AboutPageHeader from "../components/AboutPageHeader";
import AboutPageFooter from "../components/AboutPageFooter";

const MOA_ACTIVITIES = [
  { icon: "payments", title: "Financial Intermediation", description: "Authorized for multi-currency asset management and global investment brokerage services." },
  { icon: "corporate_fare", title: "Corporate Structuring", description: "Expertise in holding company formation and cross-border subsidiary management." },
  { icon: "gavel", title: "Legal Advisory", description: "Regulatory compliance oversight for international trade and commercial ventures." },
  { icon: "real_estate_agent", title: "Strategic Real Estate", description: "Licensing for high-value commercial property acquisition and portfolio optimization." },
  { icon: "hub", title: "Supply Chain Logistics", description: "Authorized management of global distribution networks and trade corridor security." },
  { icon: "security", title: "Venture Capital", description: "Regulated investment in emerging technologies and high-growth frontier markets." },
];

const PARTNERS = [
  { icon: "apartment", name: "Global FinCorp" },
  { icon: "account_balance_wallet", name: "Meridian Assets" },
  { icon: "landscape", name: "Terra Venture" },
  { icon: "token", name: "Nexus Equity" },
];

const LEADERSHIP = [
  { name: "Alistair Sterling", role: "Founding Partner & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&q=80" },
  { name: "Elena Rodriguez", role: "Chief Investment Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&q=80" },
  { name: "Marcus Thorne", role: "Director of Strategy", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&q=80" },
];

const BUILDING_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&q=80";

export default function AboutUsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
      <AboutPageHeader />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-accent-gold/20 text-accent-gold text-xs font-bold tracking-widest uppercase mb-6">
              Established Excellence
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
              Excellence in <span className="gold-gradient-text">Global Expansion</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Elite Ventures is a premier strategic investment firm dedicated to driving growth and fostering innovation across international markets through sophisticated capital deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview & Mission/Vision */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={BUILDING_IMAGE}
                  alt="Modern corporate skyscraper architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent-gold p-8 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-black text-white">15+</p>
                <p className="text-white font-medium">Years of Expertise</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">
                A Legacy of Strategic Growth
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Founded on principles of integrity and excellence, Elite Ventures bridges the gap between ambitious capital and transformative opportunities. We provide the structural framework and strategic insight necessary for navigating complex global regulatory environments.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-background-light dark:bg-primary/10 rounded-xl border-l-4 border-accent-gold">
                  <span className="material-symbols-outlined text-accent-gold text-3xl flex-shrink-0">track_changes</span>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white text-xl">Our Mission</h3>
                    <p className="text-slate-600 dark:text-slate-400">To empower global enterprises through strategic capital, deep sector expertise, and unparalleled expert guidance.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-background-light dark:bg-primary/10 rounded-xl border-l-4 border-accent-gold">
                  <span className="material-symbols-outlined text-accent-gold text-3xl flex-shrink-0">visibility</span>
                  <div>
                    <h3 className="font-bold text-primary dark:text-white text-xl">Our Vision</h3>
                    <p className="text-slate-600 dark:text-slate-400">To be the world&apos;s most trusted partner in cross-border business expansion and sustainable value creation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOA Activities & Regulatory Compliance */}
      <section className="py-24 bg-background-light dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
              MOA Activities & Regulatory Compliance
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6" />
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Operating under rigorous international standards with full licensing for global commercial operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOA_ACTIVITIES.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-background-dark p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-primary dark:text-white">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-primary dark:text-white mb-16 uppercase tracking-widest">
            Strategic Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {PARTNERS.map((p) => (
              <div key={p.name} className="flex flex-col items-center group">
                <div className="h-16 w-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <span className="material-symbols-outlined text-5xl text-slate-400 group-hover:text-accent-gold transition-colors">{p.icon}</span>
                </div>
                <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-tighter">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-background-light dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl font-black text-primary dark:text-white">Executive Leadership</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">The visionaries steering our global operations.</p>
            </div>
            <Link to="/contact-us" className="hidden md:flex text-primary dark:text-white font-bold hover:text-accent-gold items-center gap-2 transition-colors">
              View Full Board <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white">{person.name}</h3>
                <p className="text-accent-gold font-semibold uppercase text-xs tracking-widest mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutPageFooter />
    </div>
  );
}
