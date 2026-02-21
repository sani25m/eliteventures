import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function PlaceholderPage({ title }) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-primary min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-black text-primary dark:text-white mb-4">
            {title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            This page is coming soon. We&apos;re building something great for you.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
