import { useState } from "react";
import TaxComplianceHeader from "../components/TaxComplianceHeader";
import TaxComplianceFooter from "../components/TaxComplianceFooter";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80";
const COMPLIANCE_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80";

const SERVICES = [
  {
    icon: "account_balance",
    title: "Corporate Tax Registration",
    description:
      "Full-cycle support for UAE Corporate Tax registration, impact assessment, and strategy implementation.",
  },
  {
    icon: "receipt_long",
    title: "VAT Advisory",
    description:
      "Expert guidance on VAT filings, audits, and compliance to ensure your business remains audit-ready.",
  },
  {
    icon: "menu_book",
    title: "Accounting & Bookkeeping",
    description:
      "Precision bookkeeping and monthly financial reporting tailored to international IFRS standards.",
  },
  {
    icon: "update",
    title: "Annual Renewals",
    description:
      "Seamless management of trade license renewals and corporate governance requirements.",
  },
];

const REGULATIONS = [
  {
    title: "Federal Decree-Law No. 47",
    text: "Implementation of Corporate Tax on business profits effective from financial years starting June 2023.",
  },
  {
    title: "Free Zone Compliance",
    text: "Strict requirements for 'Qualifying Income' and substance regulations within UAE Free Zones.",
  },
  {
    title: "Anti-Money Laundering (AML)",
    text: "Mandatory adherence to GoAML reporting and Ultimate Beneficial Ownership (UBO) declarations.",
  },
];

const INDUSTRY_OPTIONS = ["Technology", "Real Estate", "Logistics", "Professional Services"];
const SERVICE_OPTIONS = [
  "Corporate Tax Registration",
  "VAT Advisory",
  "Accounting Services",
  "Annual Renewals",
];

export default function TaxCompliancePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: INDUSTRY_OPTIONS[0],
    contactPerson: "",
    serviceOfInterest: SERVICE_OPTIONS[0],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display transition-colors min-h-screen">
      <TaxComplianceHeader />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Modern skyscraper architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent-gold text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 rounded-sm">
              Strategic Financial Excellence
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Tax, Accounting & <br />
              <span className="text-accent-gold">Compliance Services</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Navigating the evolving regulatory landscape of the UAE with precision. Elite Ventures provides comprehensive solutions for the modern enterprise.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="bg-accent-gold text-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-white transition-all"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-background-dark transition-colors" id="services">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white mb-4 uppercase tracking-tight">
              Our Core Competencies
            </h2>
            <div className="w-20 h-1.5 bg-accent-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-background-light dark:bg-slate-900/50 p-8 rounded-xl border border-primary/5 hover:border-accent-gold transition-all group shadow-sm"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-accent-gold transition-colors text-3xl">
                    {s.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
                  {s.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {s.description}
                </p>
                <a
                  href="#services"
                  className="text-primary dark:text-accent-gold font-bold text-sm uppercase tracking-wider flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-xs ml-1">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance / Regulatory */}
      <section className="py-24 bg-background-light dark:bg-background-dark/50 overflow-hidden" id="compliance">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-primary/20">
                <img
                  src={COMPLIANCE_IMAGE}
                  alt="Financial professional reviewing documents"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0" />
            </div>
            <div className="lg:w-1/2">
              <span className="text-accent-gold font-bold text-sm uppercase tracking-widest mb-4 block">
                Regulatory Framework
              </span>
              <h2 className="text-4xl font-extrabold text-primary dark:text-white mb-8 leading-tight uppercase">
                Understanding UAE <br />
                Corporate Tax Laws
              </h2>
              <div className="space-y-6">
                {REGULATIONS.map((r) => (
                  <div key={r.title} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary text-accent-gold flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">check</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary dark:text-white text-lg mb-1">
                        {r.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-white dark:bg-slate-900 border-l-4 border-accent-gold rounded-r shadow-sm">
                <p className="italic text-slate-700 dark:text-slate-300">
                  &quot;Compliance is no longer just a checkbox; it is a strategic asset that ensures longevity in the UAE&apos;s thriving economic landscape.&quot;
                </p>
                <p className="mt-3 font-bold text-primary dark:text-accent-gold">
                  — Elite Ventures Advisory Board
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Form */}
      <section className="py-24 bg-primary relative overflow-hidden" id="consultation">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold transform skew-x-12 translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white dark:bg-background-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-accent-gold p-12 flex flex-col justify-center text-primary">
              <h3 className="text-3xl font-extrabold uppercase mb-6 leading-tight">
                Secure Your Compliance Status
              </h3>
              <p className="mb-8 font-medium">
                Request a private consultation with our lead tax advisors to discuss your business requirements.
              </p>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl">verified_user</span>
                  100% Confidential
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl">schedule</span>
                  24h Response Time
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl">public</span>
                  Global Standards
                </li>
              </ul>
            </div>
            <div className="md:w-7/12 p-12">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-slate-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition-all text-slate-900 dark:text-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-slate-400 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition-all text-slate-900 dark:text-slate-200"
                    >
                      {INDUSTRY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-slate-400 mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition-all text-slate-900 dark:text-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-slate-400 mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition-all text-slate-900 dark:text-slate-200"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-slate-400 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-accent-gold outline-none transition-all text-slate-900 dark:text-slate-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-slate-900 dark:hover:bg-slate-800 transition-all mt-4"
                >
                  Schedule Tax Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <TaxComplianceFooter />
    </div>
  );
}
