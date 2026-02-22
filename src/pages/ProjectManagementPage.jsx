import { useState } from "react";
import ProjectManagementHeader from "../components/ProjectManagementHeader";
import ProjectManagementFooter from "../components/ProjectManagementFooter";

const HERO_BG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80";
const METHODOLOGY_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80";

const SERVICES = [
  {
    icon: "analytics",
    title: "Feasibility Studies",
    description:
      "Comprehensive risk assessment and market viability analysis for new ventures and infrastructure projects.",
    href: "#services",
  },
  {
    icon: "account_tree",
    title: "Investment Structuring",
    description:
      "Optimizing capital and equity frameworks for sustainable growth and maximized ROI for international investors.",
    href: "#services",
  },
  {
    icon: "public",
    title: "Market Entry",
    description:
      "Strategic roadmaps for navigating complex regulatory landscapes and capturing new regional territories effectively.",
    href: "#services",
  },
  {
    icon: "trending_up",
    title: "Business Expansion",
    description:
      "Scaling operations, supply chains, and infrastructure to meet global demand through precision management.",
    href: "#services",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Diagnostic & Analysis",
    text: "Deep dive into current operations, market positioning, and financial health to identify untapped leverage points.",
  },
  {
    num: "02",
    title: "Bespoke Strategy Design",
    text: "Crafting a proprietary roadmap that aligns resources with high-value expansion opportunities and risk mitigation.",
  },
  {
    num: "03",
    title: "Hands-on Execution",
    text: "Project management office (PMO) deployment to ensure milestones are met on time, under budget, and with precision.",
  },
];

const SERVICE_OPTIONS = [
  "Feasibility Study",
  "Investment Structuring",
  "Market Entry Strategy",
  "Business Expansion",
];

export default function ProjectManagementPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    serviceOfInterest: SERVICE_OPTIONS[0],
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
      <ProjectManagementHeader />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary py-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/20 border border-accent-gold/30 text-accent-gold">
              <span className="size-2 rounded-full bg-accent-gold animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Premium Strategic Services
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Strategic Business{" "}
              <span className="text-accent-gold">Advisory</span> & Project
              Management
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-xl font-light">
              Empowering global enterprises with high-level strategic oversight
              and precision project execution to navigate complex international
              markets with confidence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#services"
                className="bg-accent-gold hover:bg-accent-gold/90 text-primary px-8 py-4 rounded-xl font-extrabold text-lg transition-all transform hover:-translate-y-1"
              >
                View Our Services
              </a>
              <a
                href="#methodology"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Our Track Record
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-2">
              <img
                src={HERO_IMAGE}
                alt="Executive meeting in a modern glass office"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-accent-gold flex items-center justify-center text-primary font-bold italic text-xl">
                    EV
                  </div>
                  <div>
                    <p className="text-white font-bold">Trusted by Fortune 500</p>
                    <p className="text-slate-300 text-sm">
                      Managing assets over $2.5B globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-accent-gold font-bold uppercase tracking-widest text-sm">
              Our Expertise
            </h2>
            <h3 className="text-4xl font-black text-primary dark:text-white">
              Core Strategic Services
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              We provide end-to-end consulting that bridges the gap between
              ambitious vision and flawless operational delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-2xl bg-background-light dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-accent-gold dark:hover:border-accent-gold transition-all duration-300"
              >
                <div className="size-14 rounded-xl bg-primary text-accent-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">
                    {s.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-3">
                  {s.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <a
                  href={s.href}
                  className="text-accent-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 size-64 bg-accent-gold/10 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-12">
                <div>
                  <h2 className="text-accent-gold font-bold uppercase tracking-widest text-sm mb-4">
                    The Methodology
                  </h2>
                  <h3 className="text-4xl font-black text-primary dark:text-white leading-tight">
                    The Scaling Blueprint: <br />
                    How We Drive Success
                  </h3>
                </div>
                <div className="space-y-8">
                  {STEPS.map((step) => (
                    <div key={step.num} className="flex gap-6">
                      <div className="flex-shrink-0 size-12 rounded-full border-2 border-accent-gold flex items-center justify-center font-black text-primary dark:text-accent-gold text-lg">
                        {step.num}
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-primary dark:text-white mb-2">
                          {step.title}
                        </h5>
                        <p className="text-slate-600 dark:text-slate-400">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:pl-10">
              <div className="bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-2xl transform rotate-1">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src={METHODOLOGY_IMAGE}
                    alt="Data visualization dashboard in an office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                    <span className="text-accent-gold font-black text-5xl mb-4">
                      42%
                    </span>
                    <h4 className="text-2xl font-bold mb-2">
                      Average Growth Catalyst
                    </h4>
                    <p className="text-slate-200">
                      Across our portfolio projects within the first 18 months of
                      deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black mb-6">
                  Ready to <span className="text-accent-gold">Transform</span>{" "}
                  Your Business?
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Schedule a private advisory session with our senior consultants.
                  We&apos;ll discuss your expansion goals and explore how our
                  strategic framework can serve your enterprise.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-accent-gold">
                      check_circle
                    </span>
                    <span className="font-medium">
                      Direct access to Managing Partners
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-accent-gold">
                      check_circle
                    </span>
                    <span className="font-medium">
                      Tailored opportunity assessment
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-accent-gold">
                      check_circle
                    </span>
                    <span className="font-medium">
                      No-obligation strategic roadmap
                    </span>
                  </div>
                </div>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:ring-accent-gold focus:border-accent-gold text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:ring-accent-gold focus:border-accent-gold text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enterprise Corp"
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:ring-accent-gold focus:border-accent-gold text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Service of Interest
                  </label>
                  <select
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:ring-accent-gold focus:border-accent-gold text-white appearance-none [&>option]:bg-primary"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full gold-gradient text-primary font-black py-4 rounded-xl shadow-xl shadow-accent-gold/20 transform hover:-translate-y-1 transition-all uppercase tracking-widest"
                  >
                    Request Advisory Session
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ProjectManagementFooter />
    </div>
  );
}
