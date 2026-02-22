import { useState } from "react";
import ContactPageHeader from "../components/ContactPageHeader";
import ContactPageFooter from "../components/ContactPageFooter";

const SERVICE_OPTIONS = [
  "Venture Capital Investment",
  "Wealth Management",
  "Private Equity",
  "Real Estate Advisory",
  "Other Inquiry",
];

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4484649567526!2d55.26894337394797!3d25.188094432071974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x260c76b1eeabb7d9%3A0xbfc21a79129d0aad!2sElite%20Venture%20Real%20Estate!5e0!3m2!1sen!2slk!4v1771747183601!5m2!1sen!2slk";
const WHATSAPP_NUMBER = "97140000000";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    serviceInterest: SERVICE_OPTIONS[0],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g. API call)
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <ContactPageHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent-gold blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-400 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-20">
          <span className="inline-block rounded-full bg-accent-gold/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-gold mb-6 border border-accent-gold/30">
            Global Partnership
          </span>
          <h1 className="text-4xl font-black leading-tight text-white lg:text-6xl tracking-[-0.03em]">
            Connect with Elite Ventures
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80">
            Partner with excellence. Reach out to our expert advisors for bespoke investment strategies and global venture opportunities.
          </p>
        </div>
      </section>

      {/* Form & Contact Details */}
      <main className="mx-auto -mt-16 mb-20 max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Consultation Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
                <h2 className="text-2xl font-bold text-primary dark:text-white">Consultation Booking</h2>
                <p className="mt-2 text-slate-500 dark:text-slate-400">Please provide your details and our team will contact you within 24 hours.</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-bold text-slate-700 dark:text-slate-300">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Elite Corp"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="serviceInterest" className="text-sm font-bold text-slate-700 dark:text-slate-300">Service Interest</label>
                  <div className="relative">
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 pr-12 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can we assist with your investment goals?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 p-4 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary py-4 text-lg font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined">send</span>
                  Request Consultation
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details Sidebar */}
          <div className="space-y-6">
            <div className="group rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 transition-all hover:border-accent-gold/50 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary dark:text-accent-gold group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">call</span>
              </div>
              <h3 className="text-lg font-bold text-primary dark:text-white">Call Us</h3>
              <p className="mt-1 text-slate-500 dark:text-slate-400">Available Mon-Fri, 9am - 6pm</p>
              <a href="tel:+9714000000" className="mt-4 block text-lg font-bold text-primary dark:text-white hover:text-accent-gold transition-colors">
                +971 4 000 0000
              </a>
            </div>
            <div className="group rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 transition-all hover:border-accent-gold/50 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary dark:text-accent-gold group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <h3 className="text-lg font-bold text-primary dark:text-white">Email Us</h3>
              <p className="mt-1 text-slate-500 dark:text-slate-400">We respond within 24 hours</p>
              <a href="mailto:contact@eliteventures.com" className="mt-4 block text-lg font-bold text-primary dark:text-white hover:text-accent-gold transition-colors">
                contact@eliteventures.com
              </a>
            </div>
            <div className="group rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 transition-all hover:border-accent-gold/50 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary dark:text-accent-gold group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3 className="text-lg font-bold text-primary dark:text-white">Headquarters</h3>
              <p className="mt-1 text-slate-500 dark:text-slate-400">Business Bay, Dubai</p>
              <address className="mt-4 not-italic font-semibold text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Elite Tower, Floor 42<br />
                Happiness Street, Business Bay<br />
                Dubai, United Arab Emirates
              </address>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl bg-[#25D366] p-6 text-white transition-transform hover:scale-[1.02] shadow-lg shadow-green-200 dark:shadow-green-900/30"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.66 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium opacity-90">Advisor Chat</p>
                  <p className="text-lg font-bold">Message on WhatsApp</p>
                </div>
              </div>
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </a>
          </div>
        </div>
      </main>

      {/* Map Section - Google Maps embed (Elite Venture Real Estate) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-20 mb-20">
        <div className="relative overflow-hidden rounded-3xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800 shadow-2xl h-[450px]">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Elite Venture Real Estate - Google Maps"
            className="absolute inset-0 w-full h-full"
          />
          {/* Visit Our Office card */}
          <div className="absolute bottom-6 left-6 max-w-sm rounded-xl bg-white/90 dark:bg-slate-900/90 p-6 backdrop-blur shadow-xl border border-white/50 dark:border-slate-700">
            <h4 className="text-lg font-bold text-primary dark:text-white">Visit Our Office</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Experience world-class investment consulting in the heart of Dubai&apos;s financial district.
            </p>
            <a
              href="https://www.google.com/maps/place/Elite+Venture+Real+Estate"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-sm font-bold text-accent-gold hover:text-primary dark:hover:text-white transition-colors w-fit"
            >
              Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      <ContactPageFooter />
    </div>
  );
}
