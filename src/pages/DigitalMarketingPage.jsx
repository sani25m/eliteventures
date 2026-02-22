import { useState } from "react";
import { Link } from "react-router-dom";
import DigitalMarketingHeader from "../components/DigitalMarketingHeader";
import DigitalMarketingFooter from "../components/DigitalMarketingFooter";

const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAyDnz4bWDv1N6pKG6eaQaxi9SXvNkW0RvNg2aZOZiS34mqaRF7MXz-WFe5ii1rb6a-zoby2Dfkq1eaXfrvJ5DcxYlISPDz1TyWC22AIRsSm4cRFoSDCo49tlEGTkROPsuoqZ0rtstOXljOo1LOmsCEenqYjEVege52W2ZK5zsEQzxDVcMmAdYlxrHP0QdpApwkK5gTMYq3GStTdSXCs_3fgW0ClXvLHQ4-a4gjo_QXnw0VvENxxS_tEMscq2yxDP0ECQ2N4rJWoXya";

const SERVICES = [
  { icon: "language", title: "Website Development", description: "High-performance UI/UX design focused on speed and high conversion rates." },
  { icon: "trending_up", title: "SEO", description: "Dominating search rankings with localized UAE keywords and technical excellence." },
  { icon: "share", title: "Social Media", description: "Engagement-led growth across Instagram, TikTok, and LinkedIn for UAE brands." },
  { icon: "ads_click", title: "Paid Ads", description: "Direct ROI through hyper-targeted Google PPC and Meta advertising campaigns." },
  { icon: "smart_toy", title: "AI Chat Integration", description: "Next-gen automation for 24/7 lead capture and customer support optimization." },
];

const BUDGET_OPTIONS = ["AED 10,000 - 25,000", "AED 25,000 - 50,000", "AED 50,000 - 100,000", "AED 100,000+"];

export default function DigitalMarketingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    budget: BUDGET_OPTIONS[0],
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
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
      <DigitalMarketingHeader />

      {/* Hero */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-gold" />
                </span>
                Premium Digital Marketing
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-primary dark:text-white leading-[1.1] tracking-tight">
                Digital Growth & <br />
                <span className="text-accent-gold">Marketing Solutions</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Scaling UAE brands through data-driven strategies, premium execution, and high-performance digital ecosystems designed for the Dubai & Abu Dhabi markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-navy-muted transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
                >
                  Request Marketing Proposal
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <a
                  href="#services"
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  View Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square bg-slate-200 dark:bg-slate-800 border border-white/20">
                <img
                  src={HERO_IMAGE}
                  alt="Digital Marketing Excellence - Modern business in Dubai"
                  className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-normal opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 border-t-white/40">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-accent-gold flex items-center justify-center text-primary font-bold text-xl">
                      98%
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Client Satisfaction</p>
                      <p className="text-white/70 text-xs">Across UAE Real Estate & Luxury sectors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-accent-gold uppercase tracking-[0.2em]">Our Specialized Services</h2>
            <h3 className="text-3xl lg:text-5xl font-black text-primary dark:text-white tracking-tight">
              Full-Stack Digital Domination
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              We provide end-to-end solutions that cover every touchpoint of your customer&apos;s journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="p-8 rounded-2xl bg-background-light dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-accent-gold transition-all group"
              >
                <div className="size-14 rounded-xl bg-primary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-primary dark:text-white mb-2">{s.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section: The Elite Edge */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-accent-gold uppercase tracking-[0.2em]">Strategy First</h2>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  The Elite Edge: Strategy Built for <span className="text-accent-gold">High ROI</span>
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: "payments", title: "Data-Driven ROI", text: "Every campaign is meticulously optimized for measurable financial returns, not just vanity metrics." },
                  { icon: "location_on", title: "UAE Market Expertise", text: "Specialized strategies for the unique Middle Eastern digital landscape and cultural nuances." },
                  { icon: "verified", title: "Brand Dominance", text: "Establish a premium presence that commands authority and outshines local competitors." },
                  { icon: "monitoring", title: "Transparent Reporting", text: "Live dashboards and monthly deep-dives into your brand's performance and growth trajectory." },
                ].map((item) => (
                  <div key={item.title} className="space-y-3">
                    <div className="text-accent-gold flex items-center gap-2">
                      <span className="material-symbols-outlined">{item.icon}</span>
                      <span className="font-bold">{item.title}</span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-white/10 shadow-2xl">
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <h4 className="text-2xl font-bold">Local Performance</h4>
                  <span className="text-accent-gold font-bold">2024 Market Data</span>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Dubai Market Reach", value: 94 },
                    { label: "Abu Dhabi Engagement", value: 88 },
                    { label: "Luxury Sector Conversion", value: 76 },
                  ].map((item) => (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-gold rounded-full" style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-accent-gold/10 rounded-2xl border border-accent-gold/20">
                  <p className="text-sm italic text-white/90">
                    &ldquo;Elite Ventures transformed our digital presence in just 3 months. Our lead quality from the UAE market tripled.&rdquo;
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent-gold">
                    — CEO, Prestigious Properties Dubai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Form CTA */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 grid md:grid-cols-5">
              <div className="md:col-span-2 bg-primary p-10 lg:p-12 text-white space-y-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black mb-4 leading-tight">
                    Request Your <span className="text-accent-gold">Growth Plan</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Fill out the form to receive a tailored digital marketing proposal and ROI forecast for your brand.
                  </p>
                </div>
                <div className="space-y-4">
                  {["Free Brand Audit", "Competitor Analysis", "6-Month Roadmap"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-accent-gold">check_circle</span>
                      <span className="text-xs font-medium uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-3 p-10 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="dm-fullName" className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-widest ml-1">
                        Full Name
                      </label>
                      <input
                        id="dm-fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="dm-email" className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-widest ml-1">
                        Work Email
                      </label>
                      <input
                        id="dm-email"
                        name="email"
                        type="email"
                        placeholder="john@company.ae"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="dm-company" className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-widest ml-1">
                        Company
                      </label>
                      <input
                        id="dm-company"
                        name="company"
                        type="text"
                        placeholder="Elite Brand LLC"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="dm-budget" className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-widest ml-1">
                        Monthly Budget
                      </label>
                      <select
                        id="dm-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all text-sm appearance-none"
                      >
                        {BUDGET_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="dm-message" className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-widest ml-1">
                      Project Message
                    </label>
                    <textarea
                      id="dm-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base hover:bg-navy-muted shadow-lg transition-all"
                  >
                    Send Proposal Request
                  </button>
                  <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest pt-2">
                    Typically responds within 4 business hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DigitalMarketingFooter />
    </div>
  );
}
