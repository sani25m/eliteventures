import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { getMySubmissions } from "../api/client";
import ContactPageHeader from "../components/ContactPageHeader";
import ContactPageFooter from "../components/ContactPageFooter";

const SOURCE_LABELS = {
  contact: "Contact",
  "digital-marketing": "Digital Marketing",
  banking: "Banking Solutions",
  "company-formation": "Company Formation",
  "project-management": "Project Management",
  "tax-compliance": "Tax & Compliance",
  "luxury-tourism": "Luxury Tourism",
};

export default function ProfilePage() {
  const { user, session, loading: authLoading, signOut, updatePassword, updateProfile, accessToken } = useUserAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [subLoading, setSubLoading] = useState(true);
  const [subError, setSubError] = useState("");
  const [passwordForm, setPasswordForm] = useState({ newPassword: "", confirm: "" });
  const [passwordMessage, setPasswordMessage] = useState({ type: "", text: "" });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileMessage, setProfileMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login", { state: { from: { pathname: "/profile" } }, replace: true });
      return;
    }
  }, [authLoading, user, navigate]);

  useEffect(() => {
    if (!accessToken) {
      setSubLoading(false);
      return;
    }
    setSubLoading(true);
    setSubError("");
    getMySubmissions(accessToken)
      .then(setSubmissions)
      .catch((err) => setSubError(err.message))
      .finally(() => setSubLoading(false));
  }, [accessToken]);

  useEffect(() => {
    const name = user?.user_metadata?.full_name || user?.user_metadata?.name || "";
    setDisplayName(name);
  }, [user]);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordMessage({ type: "", text: "" });
    if (passwordForm.newPassword !== passwordForm.confirm) {
      setPasswordMessage({ type: "error", text: "Passwords do not match" });
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setPasswordMessage({ type: "error", text: "Password must be at least 6 characters" });
      return;
    }
    setPasswordLoading(true);
    try {
      await updatePassword(passwordForm.newPassword);
      setPasswordMessage({ type: "success", text: "Password updated." });
      setPasswordForm({ newPassword: "", confirm: "" });
    } catch (err) {
      setPasswordMessage({ type: "error", text: err.message || "Failed to update password" });
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileMessage({ type: "", text: "" });
    setProfileSaving(true);
    try {
      await updateProfile({ data: { full_name: displayName.trim() || undefined } });
      setProfileMessage({ type: "success", text: "Profile updated." });
    } catch (err) {
      setProfileMessage({ type: "error", text: err.message || "Failed to update profile" });
    } finally {
      setProfileSaving(false);
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate("/", { replace: true });
  };

  if (authLoading || !user) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Loading…</p>
      </div>
    );
  }

  const email = user?.email ?? "";

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <ContactPageHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-2xl font-bold text-primary dark:text-white mb-8">My Profile</h1>

        {/* Account */}
        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow mb-8">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Account</h2>
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <p className="text-slate-600 dark:text-slate-400">{email}</p>
            </div>
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Display name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-2"
                placeholder="Your name"
              />
            </div>
            {profileMessage.text && (
              <p className={profileMessage.type === "error" ? "text-red-600 dark:text-red-400 text-sm" : "text-green-600 dark:text-green-400 text-sm"}>
                {profileMessage.text}
              </p>
            )}
            <button type="submit" disabled={profileSaving} className="rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary/90 disabled:opacity-50">
              {profileSaving ? "Saving…" : "Save profile"}
            </button>
          </form>
        </section>

        {/* Change password */}
        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow mb-8">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Change password</h2>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                New password
              </label>
              <input
                id="newPassword"
                type="password"
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm((p) => ({ ...p, newPassword: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-2"
                placeholder="At least 6 characters"
                minLength={6}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Confirm new password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={passwordForm.confirm}
                onChange={(e) => setPasswordForm((p) => ({ ...p, confirm: e.target.value }))}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white px-4 py-2"
                placeholder="••••••••"
              />
            </div>
            {passwordMessage.text && (
              <p className={passwordMessage.type === "error" ? "text-red-600 dark:text-red-400 text-sm" : "text-green-600 dark:text-green-400 text-sm"}>
                {passwordMessage.text}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" disabled={passwordLoading} className="rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary/90 disabled:opacity-50">
                {passwordLoading ? "Updating…" : "Update password"}
              </button>
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
          </form>
        </section>

        {/* My submissions */}
        <section className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow mb-8">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">My submissions</h2>
          {subLoading && <p className="text-slate-500 text-sm">Loading…</p>}
          {subError && <p className="text-red-600 dark:text-red-400 text-sm">{subError}</p>}
          {!subLoading && !subError && submissions.length === 0 && (
            <p className="text-slate-500 text-sm">No submissions yet. Forms you submit while logged in will appear here.</p>
          )}
          {!subLoading && !subError && submissions.length > 0 && (
            <ul className="space-y-3">
              {submissions.map((s) => (
                <li key={s.id} className="border border-slate-200 dark:border-slate-600 rounded-lg p-3 text-sm">
                  <span className="font-medium text-primary dark:text-slate-300">
                    {SOURCE_LABELS[s.source] || s.source}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">
                    {s.created_at ? new Date(s.created_at).toLocaleDateString() : ""}
                  </span>
                  {s.data && typeof s.data === "object" && (
                    <div className="mt-2 text-slate-600 dark:text-slate-400">
                      {[s.data.fullName, s.data.email, s.data.workEmail, s.data.companyName].filter(Boolean).join(" · ")}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Sign out
          </button>
        </div>
      </main>
      <ContactPageFooter />
    </div>
  );
}
