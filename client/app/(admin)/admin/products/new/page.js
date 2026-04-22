import { Save, X, Image as ImageIcon, Box, Tag } from "lucide-react";
import AdminPageHeader from "@/app/components/admin/adminPageHeader";
import { categories } from "@/app/data/categories";

export default function CreateProductPage() {
  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <AdminPageHeader
        title="Create New Product"
        description="Add a new architectural object or editorial apparel to your catalog."
      />

      <section className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm max-w-5xl">
        <form className="grid gap-8 md:grid-cols-2">
          {/* Basic Information */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
              <Box size={20} className="text-indigo-600" />
              <h2 className="text-lg font-black text-slate-900">
                Basic Information
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Product Title
                </label>
                <input
                  className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 focus:ring-2 ring-indigo-500/20 outline-none transition-all"
                  placeholder="e.g., Minimalist Concrete Vase"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Slug
                </label>
                <input
                  className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 focus:ring-2 ring-indigo-500/20 outline-none transition-all"
                  placeholder="minimalist-concrete-vase"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Category
                </label>
                <select className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 focus:ring-2 ring-indigo-500/20 outline-none appearance-none cursor-pointer">
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Pricing & Logistics */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
              <Tag size={20} className="text-indigo-600" />
              <h2 className="text-lg font-black text-slate-900">Pricing</h2>
            </div>
            <div className="grid gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Base Price ($)
                </label>
                <input
                  type="number"
                  className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 outline-none"
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Discount %
                </label>
                <input
                  type="number"
                  className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 outline-none"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
              <ImageIcon size={20} className="text-indigo-600" />
              <h2 className="text-lg font-black text-slate-900">Media</h2>
            </div>
            <div className="grid gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Main Thumbnail URL
                </label>
                <input
                  className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 outline-none"
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                  Gallery Images (Comma separated)
                </label>
                <input
                  className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 outline-none"
                  placeholder="url1, url2..."
                />
              </div>
            </div>
          </div>

          {/* Description & Tags */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
                Full Description
              </label>
              <textarea
                rows={4}
                className="w-full bg-slate-50 rounded-[24px] border-none p-5 text-sm font-bold text-slate-700 outline-none transition-all focus:ring-2 ring-indigo-500/10"
                placeholder="Describe the material, origin, and aesthetic..."
              />
            </div>
          </div>

          {/* Variants Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-50 pb-4">
              <h2 className="text-lg font-black text-slate-900">
                Inventory Variants
              </h2>
              <button
                type="button"
                className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md tracking-widest"
              >
                Add SKU
              </button>
            </div>
            <div className="grid gap-3 rounded-[24px] border border-slate-100 bg-slate-50/50 p-6 sm:grid-cols-4">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  SKU
                </p>
                <input
                  className="w-full bg-white rounded-xl border-none px-3 py-2 text-sm font-bold shadow-sm"
                  placeholder="CV-01-S"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Color
                </p>
                <input
                  className="w-full bg-white rounded-xl border-none px-3 py-2 text-sm font-bold shadow-sm"
                  placeholder="Stone"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Size
                </p>
                <select className="w-full bg-white rounded-xl border-none px-3 py-2 text-sm font-bold shadow-sm">
                  {["s", "m", "l", "xl", "2xl"].map((s) => (
                    <option key={s}>{s.toUpperCase()}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase">
                  Stock
                </p>
                <input
                  type="number"
                  className="w-full bg-white rounded-xl border-none px-3 py-2 text-sm font-bold shadow-sm"
                  placeholder="25"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex items-center gap-4 pt-8 border-t border-slate-50">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg">
              <Save size={20} />
              Publish Product
            </button>
            <button
              type="button"
              className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
            >
              <X size={20} />
              Discard
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
