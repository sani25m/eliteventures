import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import ContactPageHeader from "../components/ContactPageHeader";
import ContactPageFooter from "../components/ContactPageFooter";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPasswordForEmail } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    setLoading(true);
    try {
      await resetPasswordForEmail(email.trim());
      setSent(true);
    } catch (err) {
      setError(err.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <ContactPageHeader />
      <main className="mx-auto max-w-md px-6 py-16">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-primary dark:text-white text-center">Forgot password</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center mt-1">
            Enter your email and we&apos;ll send a reset link.
          </p>
          {sent ? (
            <div className="mt-8 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-sm">
              Check your email for a link to reset your password. You can close this page.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="you@example.com"
                  required
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send reset link"}
              </button>
            </form>
          )}
          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Back to sign in
            </Link>
          </p>
        </div>
      </main>
      <ContactPageFooter />
    </div>
  );
}
