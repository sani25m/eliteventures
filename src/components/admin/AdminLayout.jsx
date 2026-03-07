import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import {
  MdDashboard,
  MdLogout,
  MdContactMail,
  MdCampaign,
  MdAccountBalance,
  MdBusiness,
  MdAssignment,
  MdReceipt,
  MdBeachAccess,
} from "react-icons/md";

const FORM_SOURCES = [
  { path: "contact", label: "Contact", icon: MdContactMail },
  { path: "digital-marketing", label: "Digital Marketing", icon: MdCampaign },
  { path: "banking", label: "Banking Solutions", icon: MdAccountBalance },
  { path: "company-formation", label: "Company Formation", icon: MdBusiness },
  { path: "project-management", label: "Project Management", icon: MdAssignment },
  { path: "tax-compliance", label: "Tax & Compliance", icon: MdReceipt },
  { path: "luxury-tourism", label: "Luxury Tourism", icon: MdBeachAccess },
];

export default function AdminLayout() {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive ? "bg-white/15 text-accent-gold" : "text-white/80 hover:bg-white/10"
    }`;

  return (
    <div className="h-screen max-h-screen bg-slate-100 dark:bg-slate-900 flex overflow-hidden">
      <aside className="w-64 h-screen max-h-screen bg-primary text-white flex flex-col shrink-0 overflow-hidden">
        <div className="p-6 border-b border-white/10 shrink-0">
          <h1 className="text-lg font-bold tracking-tight">Elite Ventures</h1>
          <p className="text-xs text-white/70 mt-0.5">Admin</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 min-h-0 overflow-hidden flex flex-col">
          <NavLink to="/admin" end className={navLinkClass}>
            <MdDashboard className="text-xl shrink-0" aria-hidden />
            Dashboard
          </NavLink>
          {FORM_SOURCES.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={`/admin/submissions/${path}`}
              className={navLinkClass}
            >
              <Icon className="text-xl shrink-0" aria-hidden />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10 shrink-0">
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 transition-colors"
          >
            <MdLogout className="text-xl shrink-0" aria-hidden />
            Log out
          </button>
        </div>
      </aside>
      <main className="flex-1 min-w-0 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
