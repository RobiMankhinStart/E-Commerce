import React from "react";
import {
  Search,
  Filter,
  MoreVertical,
  ShoppingBag,
  CreditCard,
  Clock,
} from "lucide-react";

export default function OrdersPage() {
  const stats = [
    {
      label: "Today Orders",
      value: "42",
      trend: "+18% from yesterday",
      color: "text-indigo-600",
    },
    {
      label: "Pending Fulfillment",
      value: "12",
      trend: "Requires action",
      color: "text-orange-600",
    },
    {
      label: "Total Revenue",
      value: "$12,482",
      trend: "+5.2% this week",
      color: "text-emerald-600",
    },
    {
      label: "Avg. Order",
      value: "$297.00",
      trend: "High value focus",
      color: "text-indigo-600",
    },
  ];

  const orders = [
    {
      id: "#ORD-7721",
      customer: "Liam Neeson",
      date: "Oct 24, 2023",
      total: "$420.00",
      status: "Processing",
    },
    {
      id: "#ORD-7720",
      customer: "Sarah Connor",
      date: "Oct 23, 2023",
      total: "$1,120.00",
      status: "Shipped",
    },
    {
      id: "#ORD-7719",
      customer: "Bruce Wayne",
      date: "Oct 23, 2023",
      total: "$89.00",
      status: "Cancelled",
    },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <header className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">
            Orders
          </h2>
          <p className="text-slate-500 font-medium">
            Track and manage customer transactions.
          </p>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
              {stat.label}
            </p>
            <p className="text-3xl font-black text-slate-900 mb-2">
              {stat.value}
            </p>
            <p className={`text-xs font-bold ${stat.color}`}>{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search order ID or customer..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 ring-indigo-500/20 text-sm font-medium"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100">
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Order ID
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Customer
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Date
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Total
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-6 py-5 font-black text-slate-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-slate-600">
                    {order.customer}
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-slate-400">
                    {order.date}
                  </td>
                  <td className="px-6 py-5 text-sm font-black text-slate-900">
                    {order.total}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${
                        order.status === "Shipped"
                          ? "bg-emerald-50 text-emerald-600"
                          : order.status === "Processing"
                            ? "bg-indigo-50 text-indigo-600"
                            : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-indigo-600">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
