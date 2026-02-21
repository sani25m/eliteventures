import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: "corporate_fare",
    title: "Business Setup",
    description: "Full-spectrum company formation across UAE Mainland, Freezones, and Offshore jurisdictions with expert legal guidance.",
    href: "/company-formation",
  },
  {
    icon: "account_balance",
    title: "Corporate Banking",
    description: "Streamlined bank account opening and strategic relationship management with top-tier local and international UAE banks.",
    href: "/banking-solutions",
  },
  {
    icon: "calculate",
    title: "Tax Advisory",
    description: "Stay compliant with the latest UAE Corporate Tax and VAT regulations through our expert accounting and advisory services.",
    href: "/tax-compliance",
  },
  {
    icon: "rocket_launch",
    title: "Project Management",
    description: "From market entry to operational scale-up, we handle the logistics so you can focus on core business growth.",
    href: "/project-management-advisory",
  },
  {
    icon: "language",
    title: "Digital Marketing",
    description: "Localized marketing strategies designed to capture the UAE market and establish a dominant online presence.",
    href: "/digital-marketing",
  },
  {
    icon: "luggage",
    title: "Luxury Tourism",
    description: "Bespoke luxury itineraries, concierge services, and premium travel management for corporate and private VIPs.",
    href: "/luxury-tourism",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-accent-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Core Competencies
        </h2>
        <p className="text-4xl md:text-5xl font-black text-primary dark:text-white">
          Our Services Overview
        </p>
        <div className="h-1.5 w-24 bg-accent-gold mx-auto mt-6 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group p-8 rounded-xl border border-primary/5 bg-background-light dark:bg-slate-900 hover:shadow-2xl hover:border-accent-gold/20 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-gold transition-colors">
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <Link
              to={service.href}
              className="text-primary dark:text-accent-gold font-bold text-sm flex items-center gap-1 hover:gap-3 transition-all"
            >
              Learn More
              <span className="material-symbols-outlined text-sm">trending_flat</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
