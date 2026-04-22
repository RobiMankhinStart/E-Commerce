"use client";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { adminApiService } from "./services/api";
import AdminSideNavbar from "../components/admin/AdminSideNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar - Remains static across admin pages */}
      <AdminSideNavbar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-10">
        <ApiProvider api={adminApiService}>{children}</ApiProvider>
      </main>
    </div>
  );
}
