import { Link } from "react-router-dom";

const FEATURES = [
  {
    title: "Unparalleled UAE Expertise",
    description: "Deeply embedded in the UAE business ecosystem with high-level government relations.",
  },
  {
    title: "End-to-End Bespoke Support",
    description: "We don't just register companies; we build operational businesses from the ground up.",
  },
  {
    title: "Trusted Banking Partners",
    description: "98% success rate in high-tier corporate bank account openings for international clients.",
  },
];

const IMAGE_URL = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src={IMAGE_URL}
                alt="Luxury corporate meeting room"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-gold rounded-2xl z-0 hidden md:block" />
              <div className="absolute top-10 left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
                <p className="text-primary font-black text-4xl mb-1">15+</p>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">
                  Years Excellence
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-accent-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Exclusivity & Trust
            </h2>
            <h3 className="text-4xl font-black text-primary dark:text-white mb-8">
              Why Global Leaders Choose Elite Ventures
            </h3>
            <div className="space-y-6">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">{feature.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about-us"
              className="mt-10 inline-block bg-primary text-white px-8 py-3 rounded font-bold hover:bg-primary/95 transition-all"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
