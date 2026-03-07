import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import {
  getSubmissions,
  updateSubmission,
  deleteSubmission,
} from "../../api/client";

const SOURCE_LABELS = {
  contact: "Contact",
  "digital-marketing": "Digital Marketing",
  banking: "Banking Solutions",
  "company-formation": "Company Formation",
  "project-management": "Project Management",
  "tax-compliance": "Tax & Compliance",
  "luxury-tourism": "Luxury Tourism",
};

const WHATSAPP_NUMBER = import.meta.env?.VITE_WHATSAPP_NUMBER || "97140000000";

function buildMailto(email, subject = "Re: Your inquiry to Elite Ventures") {
  if (!email) return null;
  return `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}`;
}

function buildWhatsAppLink(phone, name) {
  const num = (phone || "").replace(/\D/g, "").replace(/^0/, "971") || WHATSAPP_NUMBER;
  const text = name
    ? `Hi, I'm following up on the inquiry from ${encodeURIComponent(name)}.`
    : "Hi, I'm following up on an inquiry from Elite Ventures.";
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
}

export default function AdminSubmissionsPage() {
  const { source: sourceParam } = useParams();
  const { token } = useAdminAuth();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({ source: "", data: {} });
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const sourceFilter = sourceParam || "";
  const pageLabel = sourceFilter ? (SOURCE_LABELS[sourceFilter] || sourceFilter) : "All submissions";

  const load = (searchTerm = search) => {
    setLoading(true);
    setError("");
    getSubmissions(token, searchTerm, sourceFilter)
      .then(setSubmissions)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, [token, sourceFilter]);

  const handleSearch = (e) => {
    e.preventDefault();
    load(search);
  };

  const handleSelect = (s) => {
    setSelected(selected?.id === s.id ? null : s);
    setEditing(null);
    setDeleteConfirm(null);
  };

  const startEdit = (s) => {
    setEditing(s.id);
    setEditForm({ source: s.source, data: { ...(s.data || {}) } });
  };

  const cancelEdit = () => {
    setEditing(null);
    setEditForm({ source: "", data: {} });
  };

  const handleEditChange = (key, value) => {
    if (key === "source") setEditForm((p) => ({ ...p, source: value }));
    else setEditForm((p) => ({ ...p, data: { ...p.data, [key]: value } }));
  };

  const saveEdit = async () => {
    if (!editing) return;
    setSaving(true);
    setError("");
    try {
      const updated = await updateSubmission(token, editing, editForm);
      setSubmissions((prev) =>
        prev.map((s) => (s.id === updated.id ? updated : s))
      );
      setSelected(updated);
      setEditing(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    setError("");
    try {
      await deleteSubmission(token, id);
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selected?.id === id) setSelected(null);
      setDeleteConfirm(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const email = selected?.data?.email || selected?.data?.workEmail;
  const phone = selected?.data?.phone;
  const name =
    selected?.data?.fullName ||
    selected?.data?.companyName ||
    selected?.data?.contactPerson;

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          {pageLabel}
        </h1>
        <form onSubmit={handleSearch} className="flex gap-2 flex-1 max-w-md">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={sourceFilter ? `Search in ${pageLabel}…` : "Search by name, email, source…"}
            className="flex-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90"
          >
            Search
          </button>
        </form>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Loading…</div>
          ) : submissions.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              No submissions found.
            </div>
          ) : (
            <ul className="divide-y divide-slate-200 dark:divide-slate-700">
              {submissions.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(s)}
                    className={`w-full text-left px-6 py-4 flex items-center justify-between gap-4 transition-colors ${
                      selected?.id === s.id
                        ? "bg-primary/5 dark:bg-primary/10"
                        : "hover:bg-slate-50 dark:hover:bg-slate-700/50"
                    }`}
                  >
                    <div>
                      {!sourceFilter && (
                        <span className="font-medium text-slate-900 dark:text-white">
                          {SOURCE_LABELS[s.source] || s.source}
                        </span>
                      )}
                      {sourceFilter && (
                        <span className="font-medium text-slate-900 dark:text-white">
                          {s.data?.fullName || s.data?.companyName || s.data?.contactPerson || s.data?.email || "—"}
                        </span>
                      )}
                      <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">
                        {s.createdAt
                          ? new Date(s.createdAt).toLocaleString()
                          : ""}
                      </span>
                    </div>
                    <span className="text-slate-400 truncate max-w-[200px]">
                      {sourceFilter
                        ? (s.createdAt ? new Date(s.createdAt).toLocaleString() : "—")
                        : (s.data?.fullName || s.data?.companyName || s.data?.contactPerson || s.data?.email || "—")}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {selected && (
          <div className="w-full lg:w-[420px] rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-6 h-fit flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900 dark:text-white">
                {SOURCE_LABELS[selected.source] || selected.source}
              </h2>
              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  setEditing(null);
                  setDeleteConfirm(null);
                }}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {selected.createdAt &&
                new Date(selected.createdAt).toLocaleString()}
            </p>

            {/* Email & WhatsApp */}
            <div className="flex gap-2 flex-wrap">
              {email && (
                <a
                  href={buildMailto(email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  Email
                </a>
              )}
              <a
                href={buildWhatsAppLink(phone, name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium hover:bg-green-200 dark:hover:bg-green-900/50"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                WhatsApp
              </a>
            </div>

            {editing === selected.id ? (
              <div className="space-y-3 border-t border-slate-200 dark:border-slate-700 pt-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                    Source
                  </label>
                  <select
                    value={editForm.source}
                    onChange={(e) => handleEditChange("source", e.target.value)}
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm px-3 py-2"
                  >
                    {Object.entries(SOURCE_LABELS).map(([val, label]) => (
                      <option key={val} value={val}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                {editForm.data &&
                  Object.entries(editForm.data).map(([key, value]) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </label>
                      <input
                        type="text"
                        value={value ?? ""}
                        onChange={(e) =>
                          handleEditChange(key, e.target.value)
                        }
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm px-3 py-2"
                      />
                    </div>
                  ))}
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={saveEdit}
                    disabled={saving}
                    className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 disabled:opacity-50"
                  >
                    {saving ? "Saving…" : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <dl className="space-y-3 text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
                  {selected.data &&
                    Object.entries(selected.data).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-slate-500 dark:text-slate-400 font-medium capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </dt>
                        <dd className="text-slate-900 dark:text-white mt-0.5 break-words">
                          {value == null || value === ""
                            ? "—"
                            : String(value)}
                        </dd>
                      </div>
                    ))}
                </dl>
                <div className="flex gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => startEdit(selected)}
                    className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeleteConfirm(selected.id)}
                    className="px-4 py-2 rounded-lg border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 text-sm hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}

            {deleteConfirm === selected.id && (
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-800 dark:text-red-200 mb-3">
                  Delete this submission? This cannot be undone.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleDelete(selected.id)}
                    className="px-3 py-1.5 rounded bg-red-600 text-white text-sm font-medium"
                  >
                    Yes, delete
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeleteConfirm(null)}
                    className="px-3 py-1.5 rounded border border-slate-300 dark:border-slate-600 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
