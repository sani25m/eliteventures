import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { getSubmissions, getAdminStats } from "../../api/client";
import { MdPeople } from "react-icons/md";

const SOURCE_LABELS = {
  contact: "Contact",
  "digital-marketing": "Digital Marketing",
  banking: "Banking Solutions",
  "company-formation": "Company Formation",
  "project-management": "Project Management",
  "tax-compliance": "Tax & Compliance",
  "luxury-tourism": "Luxury Tourism",
};

function SubmissionsLineChart({ data }) {
  const width = 800;
  const height = 280;
  const padding = { top: 20, right: 20, bottom: 36, left: 44 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const maxCount = Math.max(1, ...data.map((d) => d.count));
  const minCount = 0;
  const xScale = (i) => padding.left + (i / Math.max(1, data.length - 1)) * innerWidth;
  const yScale = (v) => padding.top + innerHeight - ((v - minCount) / (maxCount - minCount || 1)) * innerHeight;
  const pathD =
    data.length > 0
      ? data
          .map((d, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScale(d.count)}`)
          .join(" ")
      : "";
  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[280px] min-w-0" preserveAspectRatio="xMidYMid meet">
        <line x1={padding.left} y1={padding.top} x2={padding.left} y2={height - padding.bottom} stroke="currentColor" strokeOpacity={0.2} />
        <line x1={padding.left} y1={height - padding.bottom} x2={width - padding.right} y2={height - padding.bottom} stroke="currentColor" strokeOpacity={0.2} />
        <path d={pathD} fill="none" stroke="#000047" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => (
          <circle key={d.date} cx={xScale(i)} cy={yScale(d.count)} r={4} fill="#000047" className="text-primary" />
        ))}
        {data.map((d, i) => (
          <text
            key={`x-${d.date}`}
            x={xScale(i)}
            y={height - padding.bottom + 14}
            textAnchor="middle"
            className="fill-slate-500 dark:fill-slate-400 text-[10px]"
          >
            {new Date(d.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
          </text>
        ))}
        {[0, Math.ceil(maxCount / 2), maxCount].filter((v, i, a) => a.indexOf(v) === i).map((v) => (
          <text
            key={v}
            x={padding.left - 6}
            y={yScale(v) + 4}
            textAnchor="end"
            className="fill-slate-500 dark:fill-slate-400 text-[10px]"
          >
            {v}
          </text>
        ))}
      </svg>
    </div>
  );
}

export default function AdminDashboardPage() {
  const { token } = useAdminAuth();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getSubmissions(token)
      .then((list) => {
        if (!cancelled) setSubmissions(list);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [token]);

  useEffect(() => {
    let cancelled = false;
    getAdminStats(token)
      .then((stats) => {
        if (!cancelled && stats && typeof stats.visitorCount === "number") setVisitorCount(stats.visitorCount);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [token]);

  const bySource = submissions.reduce((acc, s) => {
    acc[s.source] = (acc[s.source] || 0) + 1;
    return acc;
  }, {});
  const recent = submissions.slice(0, 5);

  const chartData = useMemo(() => {
    const byDate = {};
    submissions.forEach((s) => {
      const raw = s.createdAt || s.created_at;
      const dateStr = raw ? new Date(raw).toISOString().slice(0, 10) : null;
      if (dateStr) {
        byDate[dateStr] = (byDate[dateStr] || 0) + 1;
      }
    });
    return Object.entries(byDate)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [submissions]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Dashboard</h1>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        <div className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 dark:bg-primary/20 p-3 text-primary">
            <MdPeople className="text-2xl" aria-hidden />
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Website visitors</p>
            <p className="text-3xl font-bold text-primary dark:text-white mt-1">
              {visitorCount === null ? "…" : visitorCount.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total submissions</p>
          <p className="text-3xl font-bold text-primary dark:text-accent-gold mt-1">
            {loading ? "…" : submissions.length}
          </p>
        </div>
        {Object.entries(bySource).map(([source, count]) => (
          <Link
            key={source}
            to={`/admin/submissions/${source}`}
            className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 shadow-sm block hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              {SOURCE_LABELS[source] || source}
            </p>
            <p className="text-3xl font-bold text-primary dark:text-white mt-1">{count}</p>
          </Link>
        ))}
      </div>

      {/* Submissions over time – line chart (SVG, no recharts to avoid React 19 useRef issue) */}
      <div className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-10">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Submissions over time</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">All form submissions by date</p>
        </div>
        <div className="p-6">
          {chartData.length === 0 ? (
            <div className="h-64 flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm">
              No submission data to display yet.
            </div>
          ) : (
            <SubmissionsLineChart data={chartData} />
          )}
        </div>
      </div>

      <div className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent submissions</h2>
          <Link
            to="/admin/submissions/contact"
            className="text-sm font-medium text-primary dark:text-accent-gold hover:underline"
          >
            Contact
          </Link>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Loading…</div>
          ) : recent.length === 0 ? (
            <div className="p-8 text-center text-slate-500">No submissions yet.</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 text-left text-slate-600 dark:text-slate-400">
                  <th className="px-6 py-3 font-medium">Source</th>
                  <th className="px-6 py-3 font-medium">Preview</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((s) => (
                  <tr key={s.id} className="border-t border-slate-100 dark:border-slate-700">
                    <td className="px-6 py-4">
                      {SOURCE_LABELS[s.source] || s.source}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {s.data?.fullName || s.data?.companyName || s.data?.contactPerson || s.data?.email || "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                      {s.createdAt ? new Date(s.createdAt).toLocaleString() : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
