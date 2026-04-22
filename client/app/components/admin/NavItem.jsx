import Link from "next/link";

// Reusable NavItem Component
const NavItem = ({ icon, label, href, active = false }) => (
  <Link
    href={href}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
      active
        ? "bg-indigo-50 text-indigo-600"
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }`}
  >
    {icon}
    {label}
  </Link>
);
export default NavItem;
