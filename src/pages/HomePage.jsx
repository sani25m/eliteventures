import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import ProcessSteps from "../components/ProcessSteps";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-primary transition-colors duration-300 min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <ProcessSteps />
        <WhyChooseUs />
        <Testimonials />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  );
}
