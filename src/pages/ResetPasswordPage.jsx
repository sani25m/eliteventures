import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import ContactPageHeader from "../components/ContactPageHeader";
import ContactPageFooter from "../components/ContactPageFooter";

export default function ResetPasswordPage() {
  const { user, session, loading, updatePassword } = useUserAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user && !session) {
      setError("Invalid or expired reset link. Request a new one from the forgot password page.");
    }
  }, [loading, user, session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setSubmitting(true);
    try {
      await updatePassword(password);
      setSuccess(true);
      setTimeout(() => navigate("/profile", { replace: true }), 2000);
    } catch (err) {
      setError(err.message || "Failed to set password");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <ContactPageHeader />
      <main className="mx-auto max-w-md px-6 py-16">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-primary dark:text-white text-center">Set new password</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center mt-1">
            Enter your new password below.
          </p>
          {success ? (
            <p className="mt-6 text-green-600 dark:text-green-400 text-sm text-center">
              Password updated. Redirecting to profile…
            </p>
          ) : error && !user ? (
            <div className="mt-6 space-y-4">
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
              <Link to="/forgot-password" className="block text-center text-primary font-medium hover:underline">
                Request a new reset link
              </Link>
            </div>
          ) : user ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  New password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-3"
                  placeholder="At least 6 characters"
                  required
                  minLength={6}
                />
              </div>
              <div>
                <label htmlFor="confirm" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Confirm password
                </label>
                <input
                  id="confirm"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-3"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50"
              >
                {submitting ? "Updating…" : "Update password"}
              </button>
            </form>
          ) : (
            <p className="mt-6 text-slate-500 text-sm text-center">Loading…</p>
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
