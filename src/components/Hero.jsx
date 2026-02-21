import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQuv6MnI5p_KbvQUuu8IjuooTA4Z2_IBxc-Sct4ERr3mAjCLR-2X93j5J1j-SBzUi2CfdNOrtl0s--h0v0UNY2c63BH3PWnLhy_4n0--yzQtISKClk4D_5FRO-co-Ad-hYty3wr1Rp3F1bAh50jy-J9qe3pNU1kxJ0XQ7JCw61lMk9r2tDW-BFML3HzJim3LMdiR2FailimQ4fEThaCs_e1GLnuUXHh7D-SRKbZhlaw3YbaVOdK2no3KwW_I8NEIUCB-0XAH9hN4Jn";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[520px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10" />
        <img
          src={HERO_IMAGE}
          alt="Luxury Dubai Skyline view with skyscrapers"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center">
        <div className="max-w-2xl text-white">
          <span className="inline-block bg-accent-gold/20 border border-accent-gold/30 text-accent-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Strategic UAE Expansion
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Your Complete Business &{" "}
            <span className="text-accent-gold">Expansion</span> Partner.
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 font-medium leading-relaxed max-w-xl">
            Specialist in business setup, corporate banking, tax advisory, and luxury tourism tailored for global entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact-us"
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg"
            >
              Book Free Consultation
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
