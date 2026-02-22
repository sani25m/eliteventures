import { Link } from "react-router-dom";
import LuxuryTourismHeader from "../components/LuxuryTourismHeader";
import LuxuryTourismFooter from "../components/LuxuryTourismFooter";

const HERO_IMAGE = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80";
const SIGIRIYA_IMAGE = "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80";
const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80", alt: "Luxury villa with infinity pool", className: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=400&q=80", alt: "Tea plantations", className: "h-48 md:h-64" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80", alt: "Luxury tent interior", className: "h-48 md:h-64" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", alt: "Beach dinner at sunset", className: "col-span-2 h-64" },
];

const ITINERARY_STEPS = [
  { icon: "filter_hdr", days: "Days 1 - 3", title: "Nature & Highlands", description: "Arrive in luxury. Private helicopter transfer to the tea estates of Nuwara Eliya. Stay in a restored colonial bungalow amidst mist-covered hills and cascading waterfalls.", tags: ["Tea Tasting", "Waterfall Trek"] },
  { icon: "castle", days: "Days 4 - 5", title: "Cultural Heritage", description: "Explore the Ancient Cities. Private sunrise tour of Sigiriya Rock Fortress followed by a gourmet lunch overlooking the Minneriya tank. Traditional spa treatments included.", tags: ["Sigiriya VIP", "Ayurvedic Spa"] },
  { icon: "pets", days: "Days 6 - 8", title: "Wildlife Safari", description: "Glamping in Yala National Park. Spend your nights in ultra-luxury tents. Leopard sightings and private dinners under the stars with expert naturalists.", tags: ["Leopard Safari", "Luxury Glamping"] },
  { icon: "beach_access", days: "Days 9 - 10", title: "Coastal Relaxation", description: "Wind down in Bentota at a private beach villa. Endless horizons, sunset yacht cruises, and fresh seafood prepared by your personal chef.", tags: ["Private Villa", "Yacht Sunset"] },
];

export default function LuxuryTourismPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300 min-h-screen">
      <LuxuryTourismHeader />

      <main>
        {/* Hero */}
        <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
          </div>
          <div className="relative h-full flex flex-col justify-center px-6 lg:px-20 max-w-7xl mx-auto">
            <span className="text-white/80 font-bold tracking-[0.3em] uppercase mb-4 block">Elite Ventures Presents</span>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-6 max-w-3xl">
              Luxury Sri Lanka <br />
              <span className="text-emerald-400">Experiences</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
              Unrivaled Elegance in the Pearl of the Indian Ocean. Discover curated journeys that blend wild nature with absolute sophistication.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#itinerary" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
                Explore Itineraries
              </a>
              <a href="#gallery" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                View Private Villas
              </a>
            </div>
          </div>
        </section>

        {/* Partnership Spotlight */}
        <section id="partners" className="py-12 bg-white dark:bg-slate-900 border-b border-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-6 px-8 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-6">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-primary dark:text-emerald-400 text-4xl">handshake</span>
                </div>
                <div>
                  <h3 className="text-primary dark:text-white font-bold text-lg">Official Partnership</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    In collaboration with <span className="font-bold text-primary dark:text-emerald-400">Chariot Tours & Travels (Colombo)</span>
                  </p>
                </div>
              </div>
              <div className="flex-1 md:max-w-md">
                <p className="text-sm italic text-slate-500 dark:text-slate-400 text-center md:text-right">
                  &ldquo;Combining Elite Ventures&apos; global luxury standards with deep-rooted Sri Lankan expertise for over 25 years.&rdquo;
                </p>
              </div>
              <Link to="/contact-us" className="flex items-center gap-2 text-primary dark:text-emerald-400 font-bold hover:underline">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section id="itinerary" className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-black mb-4">10-Day Premium Sri Lanka Itinerary</h2>
            <div className="h-1.5 w-24 bg-emerald-500 rounded-full" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-primary/10">
              {ITINERARY_STEPS.map((step) => (
                <div key={step.title} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <div>
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-1 block">{step.days}</span>
                    <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{step.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {step.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary/5 dark:bg-white/5 text-primary dark:text-white rounded-lg text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative hidden lg:block">
              <div className="sticky top-32 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={SIGIRIYA_IMAGE}
                  alt="Sigiriya Lion Rock fortress at sunset, Sri Lanka"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent flex flex-col justify-end p-12">
                  <p className="text-white text-2xl font-bold">The Journey of a Lifetime</p>
                  <p className="text-white/80">Curated exclusively for you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
              <div>
                <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-black mb-2">Luxury In Every Frame</h2>
                <p className="text-slate-600 dark:text-slate-400">Sneak peak into our curated villa collection and locations.</p>
              </div>
              <Link to="/contact-us" className="text-primary dark:text-white font-bold flex items-center gap-1 hover:gap-2 transition-all">
                View Gallery <span className="material-symbols-outlined">chevron_right</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {GALLERY_IMAGES.map((img) => (
                <div
                  key={img.alt}
                  className={`rounded-2xl overflow-hidden shadow-lg group ${img.className}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[12rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-4xl mx-auto bg-primary rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full -ml-24 -mb-24" />
            <h2 className="text-white text-3xl md:text-5xl font-black mb-8 relative z-10">Ready to start your elite journey?</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              Our concierge team is standing by to craft your personalized 10-day Sri Lankan escape. Contact us for a bespoke quote today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link
                to="/contact-us"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl transition-all hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Request Luxury Tour Quote
              </Link>
              <Link
                to="/contact-us"
                className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all inline-flex items-center justify-center"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LuxuryTourismFooter />
    </div>
  );
}
