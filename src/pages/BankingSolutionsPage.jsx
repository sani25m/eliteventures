import { useState } from "react";
import { Link } from "react-router-dom";
import BankingSolutionsHeader from "../components/BankingSolutionsHeader";
import BankingSolutionsFooter from "../components/BankingSolutionsFooter";

const HERO_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=800&fit=crop&q=80";
const MAP_BG = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1500&q=80";

const BUSINESS_TYPES = ["LLC / LTD", "Holding Company", "Individual Wealth", "E-commerce / Fintech"];
const REVENUE_OPTIONS = ["$500k - $2M", "$2M - $10M", "$10M - $50M", "$50M+"];

const SERVICES = [
  {
    id: "corporate",
    icon: "corporate_fare",
    title: "Corporate Bank Account Assistance",
    description: "Multi-currency and high-volume accounts for global operations. We facilitate seamless connections with Tier-1 banks worldwide.",
    features: ["Multi-Currency IBANs", "Swift & SEPA Integration", "High-Volume Processing"],
  },
  {
    id: "individual",
    icon: "person_celebrate",
    title: "Individual Banking",
    description: "Private wealth management and exclusive financial solutions tailored for high-net-worth individuals and their families.",
    features: ["Private Wealth Access", "Visa/Mastercard Platinum", "Dedicated Portfolio Manager"],
  },
  {
    id: "compliance",
    icon: "verified_user",
    title: "Compliance & Pre-qualification",
    description: "Expert vetting to ensure high success rates. We handle KYC/AML documentation to satisfy the strictest regulatory requirements.",
    features: ["Pre-Submission Audit", "AML/KYC Advisory", "Jurisdictional Analysis"],
  },
];

const CITIES = ["ZURICH", "LONDON", "DUBAI", "SINGAPORE", "NEW YORK"];

export default function BankingSolutionsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessType: BUSINESS_TYPES[0],
    revenue: REVENUE_OPTIONS[0],
    jurisdiction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-primary dark:text-white antialiased min-h-screen">
      <BankingSolutionsHeader />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 mb-6">
                <span className="size-2 rounded-full bg-accent-gold animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary/70 dark:text-white/70">
                  Premier Banking Network
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-primary dark:text-white leading-[1.1] mb-8">
                Corporate & <span className="text-accent-gold">Individual</span> Banking Solutions
              </h1>
              <p className="text-lg lg:text-xl text-primary/70 dark:text-white/70 leading-relaxed mb-10 max-w-xl">
                Elite Ventures provides streamlined account opening, multi-currency support, and private wealth management for high-net-worth clients and global corporations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                >
                  Get Started Today
                </Link>
                <a
                  href="#form"
                  className="bg-white dark:bg-white/5 border border-primary/10 dark:border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-background-light dark:hover:bg-white/10 transition-all"
                >
                  View Credentials
                </a>
              </div>
            </div>
            <div className="relative">
              <div
                className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-primary/20 bg-cover bg-center"
                style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-background-dark p-6 rounded-2xl shadow-2xl border border-primary/5 dark:border-white/5 flex items-center gap-4">
                <div className="size-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary dark:text-white">120+</div>
                  <div className="text-xs font-medium opacity-60">Partner Jurisdictions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-24 bg-white dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-primary dark:text-white mb-4">
              Our Specialized Banking Services
            </h2>
            <div className="h-1 w-20 bg-accent-gold mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="group p-8 rounded-3xl bg-background-light dark:bg-white/5 border border-transparent hover:border-accent-gold/30 hover:shadow-2xl transition-all duration-300"
              >
                <div className="size-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <h3 className="text-xl font-extrabold mb-4 text-primary dark:text-white">{s.title}</h3>
                <p className="text-primary/70 dark:text-white/70 leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-primary dark:text-white/80">
                      <span className="material-symbols-outlined text-accent-gold text-lg">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-qualification Form */}
      <section id="form" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black mb-6">Pre-qualification Form</h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Ready to elevate your banking experience? Complete our secure pre-qualification form. Our compliance team will review your profile within 24 hours to match you with the ideal banking partners.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-accent-gold flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">lock</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Secure Submission</h4>
                    <p className="text-sm text-white/60">Your data is encrypted and handled with absolute confidentiality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-accent-gold flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-lg">speed</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Rapid Review</h4>
                    <p className="text-sm text-white/60">Initial assessment and bank matching within 1 business day.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-10 shadow-2xl text-primary dark:text-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="bank-fullName" className="text-xs font-bold uppercase tracking-wider text-primary/50 dark:text-slate-400">
                      Full Name
                    </label>
                    <input
                      id="bank-fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-background-light dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-gold text-primary dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bank-email" className="text-xs font-bold uppercase tracking-wider text-primary/50 dark:text-slate-400">
                      Email Address
                    </label>
                    <input
                      id="bank-email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background-light dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-gold text-primary dark:text-white"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="bank-businessType" className="text-xs font-bold uppercase tracking-wider text-primary/50 dark:text-slate-400">
                      Business Type
                    </label>
                    <select
                      id="bank-businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full bg-background-light dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-gold appearance-none text-primary dark:text-white"
                    >
                      {BUSINESS_TYPES.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bank-revenue" className="text-xs font-bold uppercase tracking-wider text-primary/50 dark:text-slate-400">
                      Annual Revenue (USD)
                    </label>
                    <select
                      id="bank-revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full bg-background-light dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-gold appearance-none text-primary dark:text-white"
                    >
                      {REVENUE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="bank-jurisdiction" className="text-xs font-bold uppercase tracking-wider text-primary/50 dark:text-slate-400">
                    Target Banking Jurisdiction
                  </label>
                  <input
                    id="bank-jurisdiction"
                    name="jurisdiction"
                    type="text"
                    placeholder="e.g. Switzerland, UAE, Singapore"
                    value={formData.jurisdiction}
                    onChange={handleChange}
                    className="w-full bg-background-light dark:bg-slate-800 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent-gold text-primary dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-gold hover:bg-accent-gold/90 text-primary font-black py-4 rounded-xl text-lg transition-all shadow-xl shadow-accent-gold/20 flex items-center justify-center gap-3"
                >
                  Apply for Banking Assistance
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-center text-[10px] text-primary/40 dark:text-slate-500 uppercase tracking-widest font-bold">
                  By clicking submit, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover grayscale"
          style={{ backgroundImage: `url('${MAP_BG}')` }}
          aria-hidden
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black text-primary dark:text-white mb-6">
            Global Reach, Personal Touch
          </h2>
          <p className="text-lg opacity-80 text-primary dark:text-white/80 mb-10 leading-relaxed">
            Whether you&apos;re looking for offshore privacy or onshore efficiency, our network spans the globe&apos;s most prestigious financial hubs. Join the elite.
          </p>
          <div className="flex justify-center gap-12 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all">
            {CITIES.map((city) => (
              <span key={city} className="font-black text-2xl text-primary dark:text-white">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <BankingSolutionsFooter />
    </div>
  );
}
