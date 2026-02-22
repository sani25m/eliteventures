import { useState } from "react";
import { Link } from "react-router-dom";
import CompanyFormationHeader from "../components/CompanyFormationHeader";
import CompanyFormationFooter from "../components/CompanyFormationFooter";

const HERO_IMAGE = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80";
const FORMATION_TYPES = ["Mainland", "Freezone", "Offshore", "Unsure"];

export default function CompanyFormationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    formationType: FORMATION_TYPES[0],
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
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <CompanyFormationHeader />

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
          <img
            src={HERO_IMAGE}
            alt="Dubai Business District"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/20 text-accent-gold text-xs font-bold uppercase tracking-widest mb-6">
              UAE Business Setup Experts
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6">
              Business Setup & Company Formation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-300">
                in UAE
              </span>
            </h1>
            <p className="text-lg text-slate-200 mb-10 leading-relaxed">
              Expert guidance from inception to operation. Your gateway to elite business opportunities in the Emirates. We handle the complexity, you focus on growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="bg-accent-gold hover:bg-yellow-600 text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1"
              >
                Start Your Formation
              </Link>
              <a
                href="#pathways"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Formation Pathways */}
      <section id="pathways" className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white mb-4">
              Tailored Formation Pathways
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Choose the legal structure that perfectly aligns with your business goals and operational needs in the UAE.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id="mainland" className="group relative bg-background-light dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-accent-gold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
              <div className="size-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">domain</span>
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Mainland Setup</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Perfect for businesses wanting to trade anywhere in the UAE and internationally without restrictions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> No geographical limits</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> Government contracts access</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> Diverse office space options</li>
              </ul>
              <Link to="/contact-us" className="inline-flex items-center gap-2 text-primary dark:text-accent-gold font-bold hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div id="freezone" className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-accent-gold shadow-xl transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-primary text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
              </div>
              <div className="size-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Freezone Setup</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Ideal for startups and tech companies looking for 100% foreign ownership and tax exemptions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> 100% Foreign Ownership</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> 0% Corporate Tax*</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> Easy Repatriation of Profits</li>
              </ul>
              <Link to="/contact-us" className="inline-flex items-center gap-2 text-primary dark:text-accent-gold font-bold hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div id="offshore" className="group relative bg-background-light dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-accent-gold transition-all duration-300">
              <div className="size-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Offshore Setup</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Optimized for asset protection, international trading, and holding companies with tax efficiency.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> High Privacy Standards</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> Asset Protection</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-accent-gold">check_circle</span> No UAE Audit Required</li>
              </ul>
              <Link to="/contact-us" className="inline-flex items-center gap-2 text-primary dark:text-accent-gold font-bold hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Support & Services */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4">Operational Support & Services</h2>
              <p className="text-slate-300">
                We don&apos;t just set up your company; we ensure it thrives with comprehensive back-office and legal support.
              </p>
            </div>
            <Link to="/contact-us" className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-lg font-bold transition-all whitespace-nowrap">
              Explore All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "badge", title: "Visa & PRO", desc: "Golden Visas, Investor Visas, and complete staff visa processing." },
              { icon: "description", title: "Document Clearing", desc: "Legal translation, notarization, and attestation services." },
              { icon: "account_balance_wallet", title: "Bank Assistance", desc: "Guaranteed business bank account opening assistance." },
              { icon: "gavel", title: "Corporate Legal", desc: "Drafting MOAs, Shareholder agreements, and trade licensing." },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white/5 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">{item.icon}</span>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Requirements */}
      <section className="py-24 bg-background-light dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-primary dark:text-white mb-8">Required Documents</h2>
              <div className="space-y-4">
                {[
                  { icon: "file_present", title: "Passport Copies", desc: "Clear color copies for all shareholders and directors." },
                  { icon: "history_edu", title: "Business Plan", desc: "Brief summary of proposed activities (Mandatory for some Freezones)." },
                  { icon: "task", title: "NOC Letter", desc: "No Objection Certificate if shareholder is currently employed in UAE." },
                  { icon: "home_pin", title: "Proof of Residence", desc: "Recent utility bill or official address proof from home country." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                    <span className="material-symbols-outlined text-primary dark:text-accent-gold font-bold">{item.icon}</span>
                    <div>
                      <h5 className="font-bold text-primary dark:text-white">{item.title}</h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black text-primary dark:text-white mb-8">Setup Timeline</h2>
              <div className="relative space-y-12 before:content-[''] before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                {[
                  { num: "1", title: "Consultation & Plan", desc: "Select jurisdiction, activity, and trade name (1 Day)." },
                  { num: "2", title: "Initial Approval", desc: "Submission to DED or Freezone Authority (2-3 Days)." },
                  { num: "3", title: "MOA Signing", desc: "Preparation and signing of legal documents (1 Day)." },
                  { num: null, title: "License Issued", desc: "Final trade license collection and visa processing start (Total: 5-7 Days).", gold: true },
                ].map((step) => (
                  <div key={step.title} className="relative pl-16 group">
                    <div className={`absolute left-0 top-0 size-12 rounded-full flex items-center justify-center ring-8 ring-background-light dark:ring-slate-900 z-10 ${step.gold ? "bg-accent-gold text-primary font-black" : "bg-primary text-white"}`}>
                      {step.num ? step.num : <span className="material-symbols-outlined">verified</span>}
                    </div>
                    <h5 className={`font-bold text-lg mb-1 ${step.gold ? "text-accent-gold" : "text-primary dark:text-white"}`}>{step.title}</h5>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 bg-primary p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-6">Ready to lead the market?</h2>
              <p className="text-slate-300 mb-8">
                Fill in the details and our formation consultants will reach out with a customized quote within 4 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-gold">phone_in_talk</span>
                  <a href="tel:+9714000000" className="hover:underline">+971 4 000 0000</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-gold">mail</span>
                  <a href="mailto:setup@eliteventures.ae" className="hover:underline">setup@eliteventures.ae</a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 p-12">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label htmlFor="cf-fullName" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                  <input
                    id="cf-fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg p-3 focus:ring-primary focus:border-primary text-primary dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Work Email</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg p-3 text-primary dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="cf-formationType" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Formation Type</label>
                  <select
                    id="cf-formationType"
                    name="formationType"
                    value={formData.formationType}
                    onChange={handleChange}
                    className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg p-3 text-primary dark:text-white"
                  >
                    {FORMATION_TYPES.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cf-message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your business idea..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg p-3 resize-none text-primary dark:text-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-lg transition-all shadow-xl">
                    Request Setup Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CompanyFormationFooter />
    </div>
  );
}
