"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
// import { useCreateCategoryMutation } from "../../services/api";
import AdminPageHeader from "@/app/components/admin/adminPageHeader";

export default function CreateCategoryPage() {
  const router = useRouter();
  //   const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    thumbnail: "",
    description: "",
  });

  // Auto-generate slug from name
  useEffect(() => {
    const generatedSlug = formData.name
      .toLowerCase()
      .replace(/[^a-z0-x0-9]+/g, "-") // Replace non-alphanumeric with hyphens
      .replace(/^-+|-+$/g, ""); // Trim hyphens from ends
    setFormData((prev) => ({ ...prev, slug: generatedSlug }));
  }, [formData.name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Creating category...");

    try {
      //   await createCategory(formData).unwrap();
      toast.success("Category created successfully!", { id: toastId });
      router.push("/admin/categories");
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || "Failed to create category", {
        id: toastId,
      });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <AdminPageHeader
        title="Create Category"
        description="Add a new category for storefront organization."
      />

      <section className="mt-8 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10">
        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Category Name
            </label>
            <input
              name="name"
              required
              //   disabled={isLoading}
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-700 outline-none transition-all focus:ring-2 focus:ring-indigo-500/10 focus:bg-white border-transparent focus:border-indigo-100"
              placeholder="e.g. Minimalist Tech"
            />
          </div>

          {/* Slug Field */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Slug (URL Identifier)
            </label>
            <input
              name="slug"
              required
              //   disabled={isLoading}
              value={formData.slug}
              onChange={handleChange}
              className="w-full bg-slate-50/50 rounded-2xl px-4 py-3.5 text-sm font-medium text-slate-400 outline-none cursor-not-allowed"
              placeholder="category-slug"
              readOnly
            />
          </div>

          {/* Thumbnail URL */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Thumbnail Image URL
            </label>
            <input
              name="thumbnail"
              required
              //   disabled={isLoading}
              value={formData.thumbnail}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-700 outline-none transition-all focus:ring-2 focus:ring-indigo-500/10 focus:bg-white border-transparent focus:border-indigo-100"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              //   disabled={isLoading}
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-slate-50 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-700 outline-none transition-all focus:ring-2 focus:ring-indigo-500/10 focus:bg-white border-transparent focus:border-indigo-100"
              placeholder="Describe the aesthetic and purpose of this collection..."
            />
          </div>

          {/* Actions */}
          <div className="md:col-span-2 flex items-center gap-4 pt-4">
            <button
              type="submit"
              //   disabled={isLoading}
              className="rounded-xl bg-gradient-to-br from-[#3525cd] to-[#4f46e5] px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale"
            >
              {/* {isLoading ? "Saving..." : "Save Category"} */}
              Save Category
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-xl border border-slate-200 px-8 py-3.5 text-xs font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
