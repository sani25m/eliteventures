import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Elite Ventures handled our market entry into Dubai with surgical precision. Their banking network is unparalleled in the region.",
    name: "Marcus Thorne",
    role: "CEO, Thorne Global Dynamics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&fit=crop&q=80",
  },
  {
    quote:
      "The transition was seamless. From residency visas to our luxury office setup, everything was delivered above expectations.",
    name: "Elena Rodriguez",
    role: "Managing Partner, ER Capital",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&q=80",
  },
  {
    quote:
      "Bespoke is the right word. They didn't just give us a package; they built a roadmap tailored to our international tax needs.",
    name: "Dr. Simon Kaan",
    role: "Founder, Kaan BioTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&q=80",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-accent-gold mb-5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined text-lg">
          star_border
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeSet, setActiveSet] = useState(0);
  const totalSets = 1; // One set of three cards; increase when more testimonials added

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-gold text-sm font-bold uppercase tracking-widest mb-4">
            Client Success
          </p>
          <h2 className="text-4xl font-black text-primary dark:text-white">
            Voices of Excellence
          </h2>
        </div>

        {/* Three cards side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md p-8 text-left"
            >
              <StarRating />
              <p className="text-slate-600 dark:text-slate-300 italic mb-8 leading-relaxed text-sm md:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover grayscale flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-slate-700 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators: rounded rectangles, middle active (primary), outer grey */}
        <div className="flex justify-center mt-12 gap-2">
          {[...Array(totalSets)].map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveSet(i)}
              className={`h-1.5 rounded-sm transition-colors ${
                i === activeSet ? "w-8 bg-primary" : "w-8 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`View testimonial set ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
