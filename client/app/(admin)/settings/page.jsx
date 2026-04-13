import React from "react";
import { User, Shield, Bell, Key, Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="animate-in fade-in duration-500 max-w-4xl space-y-8">
      <header>
        <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">
          Settings
        </h2>
        <p className="text-slate-500 font-medium">
          Manage your account preferences and security protocols.
        </p>
      </header>

      {/* Profile Section */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
            <User size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Account Profile</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-400">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Robiul Islam"
              className="w-full bg-slate-50 p-4 rounded-xl border-none outline-none font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-slate-400">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="robiul@admin.com"
              className="w-full bg-slate-50 p-4 rounded-xl border-none outline-none font-medium"
            />
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            Security & Access
          </h3>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <div>
              <p className="font-bold text-slate-900">
                Two-Factor Authentication
              </p>
              <p className="text-xs text-slate-500">
                Secure your account with an extra layer of protection.
              </p>
            </div>
            <button className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-indigo-600 border border-indigo-100">
              Enable
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <div>
              <p className="font-bold text-slate-900">Update Password</p>
              <p className="text-xs text-slate-500">
                Last updated 3 months ago.
              </p>
            </div>
            <button className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-slate-600 border border-slate-200">
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
            <Bell size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Notifications</h3>
        </div>

        <div className="space-y-4">
          {["Order Notifications", "Stock Alerts", "Marketing Updates"].map(
            (item) => (
              <div
                key={item}
                className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0"
              >
                <span className="font-medium text-slate-700">{item}</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-slate-300 accent-indigo-600"
                />
              </div>
            ),
          )}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex justify-end pt-4">
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
          <Save size={20} />
          Save Changes
        </button>
      </div>
    </div>
  );
}
