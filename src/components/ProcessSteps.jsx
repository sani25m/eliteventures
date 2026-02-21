const STEPS = [
  {
    number: "01",
    title: "Consult",
    description: "Initial analysis of your goals to determine the most cost-effective and legally sound structure.",
  },
  {
    number: "02",
    title: "Structure",
    description: "Preparation of all legal documentation, licenses, and permits required for the selected structure.",
  },
  {
    number: "03",
    title: "Execute",
    description: "Official registration, visa processing, and bank account opening initiated by our expert team.",
  },
  {
    number: "04",
    title: "Support",
    description: "Ongoing compliance, marketing, and expansion support to ensure long-term business sustainability.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[300px]">auto_awesome</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20">
          <h2 className="text-accent-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
            The Journey
          </h2>
          <p className="text-4xl md:text-5xl font-black">Our 4-Step Process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-[44px] left-0 right-0 h-0.5 bg-accent-gold/30 z-0" />
          {STEPS.map((step) => (
            <div key={step.number} className="relative z-10">
              <div className="w-[88px] h-[88px] bg-primary border-4 border-accent-gold rounded-full flex items-center justify-center mb-6 shadow-xl mx-auto md:mx-0">
                <span className="text-2xl font-black text-accent-gold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">{step.title}</h3>
              <p className="opacity-70 text-sm text-center md:text-left leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
