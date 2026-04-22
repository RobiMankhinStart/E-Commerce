"use client";
import { useParams, useRouter } from "next/navigation";
import { Save, RotateCcw, Box, Tag, Layers, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { categories } from "@/app/data/categories";
import { useGetProductsQuery } from "@/app/(admin)/services/api";
import AdminPageHeader from "@/app/components/admin/adminPageHeader";

export default function UpdateProductPage() {
  const { slug } = useParams();
  const router = useRouter();

  // Fetching from your live service
  const { data, isLoading } = useGetProductsQuery();

  // Finding the specific product from the fetched list
  const product = data?.data?.products?.find((p) => p.slug === slug);

  if (isLoading)
    return (
      <div className="p-10 font-bold animate-pulse text-slate-400">
        Loading Product Data...
      </div>
    );
  if (!product)
    return (
      <div className="p-10 font-bold text-rose-500">Product not found.</div>
    );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
      <div className="flex items-center gap-2">
        <Link
          href="/admin/products"
          className="p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <ArrowLeft size={20} className="text-slate-400" />
        </Link>
        <AdminPageHeader
          title="Update Product"
          description={`Refining details for: ${product.title}`}
        />
      </div>

      <section className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm max-w-5xl">
        <form className="grid gap-8 md:grid-cols-2">
          {/* Header Section */}
          <div className="md:col-span-2 flex items-center gap-3 border-b border-slate-50 pb-4">
            <Box size={20} className="text-indigo-600" />
            <h2 className="text-lg font-black text-slate-900">Core Identity</h2>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Title
            </label>
            <input
              defaultValue={product.title}
              className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 focus:ring-2 ring-indigo-500/20 outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Slug
            </label>
            <input
              defaultValue={product.slug}
              className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Category
            </label>
            <select
              defaultValue={product.category?._id || product.category}
              className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 outline-none appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Base Price ($)
            </label>
            <input
              type="number"
              defaultValue={product.price}
              className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Discount %
            </label>
            <input
              type="number"
              defaultValue={product.discountPercentage}
              className="w-full bg-slate-50 rounded-2xl border-none p-4 text-sm font-bold text-slate-700 outline-none"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Editorial Description
            </label>
            <textarea
              rows={4}
              defaultValue={product.description}
              className="w-full bg-slate-50 rounded-[24px] border-none p-5 text-sm font-bold text-slate-700 outline-none focus:ring-2 ring-indigo-500/10"
            />
          </div>

          {/* Variants Management */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
              <Layers size={20} className="text-indigo-600" />
              <h2 className="text-lg font-black text-slate-900">
                Inventory & Variants
              </h2>
            </div>
            <div className="space-y-3">
              {product.variants.map((variant, index) => (
                <div
                  key={variant.sku || index}
                  className="grid gap-3 rounded-[24px] border border-slate-100 bg-slate-50/50 p-6 sm:grid-cols-4 items-end"
                >
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase">
                      SKU
                    </p>
                    <input
                      defaultValue={variant.sku}
                      className="w-full bg-white rounded-xl border-none px-3 py-2 text-sm font-bold shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase">
                      Color
                    </p>
                    <input
                      defaultValue={variant.color}
                      className="w-full bg-white rounded-xl border-none px-3 py-2 text-sm font-bold shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase">
                      Size
                    </p>
                    <input
                      defaultValue={variant.size?.toUpperCase()}
                      className="w-full bg-white rounded-xl border-none px-3 py-2 text-sm font-bold shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase">
                      In Stock
                    </p>
                    <input
                      type="number"
                      defaultValue={variant.stock}
                      className="w-full bg-white rounded-xl border-none px-3 py-2 text-sm font-bold shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Actions */}
          <div className="md:col-span-2 flex items-center gap-4 pt-8 border-t border-slate-50">
            <button
              type="button"
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
            >
              <Save size={20} />
              Update changes
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
            >
              <RotateCcw size={20} />
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
