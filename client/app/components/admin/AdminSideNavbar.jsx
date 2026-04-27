import {
  LayoutDashboard,
  Store,
  PackageCheck,
  Package,
  ShoppingBag,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  MoreVertical,
} from "lucide-react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import NavItem from "./NavItem";

const AdminSideNavbar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-20">
      <div className="p-6">
        <h1 className="text-xl font-black tracking-tighter text-indigo-600 mb-8">
          Admin Console
        </h1>

        {/* User Profile Spot */}
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
          <div className="w-10 relative h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold overflow-hidden border-2 border-white shadow-sm">
            <Image
              fill
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
              alt="Admin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold text-slate-900 truncate">
              Robiul Islam
            </span>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-tight">
              Senior Admin
            </span>
          </div>
          <button className="ml-auto text-slate-400 hover:text-slate-600">
            <MoreVertical size={14} />
          </button>
        </div>

        <nav className="space-y-1">
          <NavItem
            href="/admin/dashboard"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active={pathname === "/dashboard"}
          />
          <NavItem
            href="/admin/products"
            icon={<Store size={20} />}
            label="Products"
            active={pathname === "/products"}
          />
          <NavItem
            href="/admin/categories"
            icon={<PackageCheck size={20} />}
            label="Categories"
            active={pathname === "/categories"}
          />
          <NavItem
            href="/admin/inventory"
            icon={<Package size={20} />}
            label="Inventory"
            active={pathname === "/inventory"}
          />
          <NavItem
            href="/admin/orders"
            icon={<ShoppingBag size={20} />}
            label="Orders"
            active={pathname === "/orders"}
          />
          <NavItem
            href="/admin/users"
            icon={<Users size={20} />}
            label="Customers"
            active={pathname === "/users"}
          />
          <NavItem
            href="/admin/settings"
            icon={<Settings size={20} />}
            label="Settings"
            active={pathname === "/settings"}
          />
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-1">
        <NavItem
          href="/admin/support"
          icon={<HelpCircle size={20} />}
          label="Support"
        />
        <NavItem href="/logout" icon={<LogOut size={20} />} label="Logout" />
      </div>
    </aside>
  );
};

export default AdminSideNavbar;
