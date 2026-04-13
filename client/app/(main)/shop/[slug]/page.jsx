"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Minus,
  Plus,
} from "lucide-react";
import Image from "next/image";
import BreadCrumb from "@/app/components/commonUI/BreadCrumb";

const product = {
  title: "Observer Chair",
  price: 1250,
  description:
    "A masterclass in architectural seating. The Observer Chair combines a sculptural, powder-coated steel frame with the tactile warmth of premium bouclé upholstery. Designed for those who appreciate the intersection of form and function.",
  details: [
    "Hand-finished oak armrests",
    "High-density comfort foam",
    "Sustainable Virgin Wool",
    "Matte structural steel",
    "Silk blend bouclé",
    "Dimensions: 75H x 65W",
  ],
  images: [
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
  ],
  variants: {
    colors: [
      { name: "Oatmeal", hex: "#E5E4E2" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Sage", hex: "#9CAF88" },
    ],
    sizes: ["Standard", "Wide"],
  },
};

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.variants.colors[0],
  );
  const [selectedSize, setSelectedSize] = useState(product.variants.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const breadcrumbItems = [
    { name: "Shop", href: "/shop" },
    { name: "Furniture", href: "/shop?category=furniture" },
    { name: product.title, href: "#" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <BreadCrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mt-8 items-start">
          {/* LEFT COLUMN: Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-slate-50 rounded-[32px] overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <button className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur rounded-full shadow-sm hover:bg-white transition-all z-10">
                <Heart size={20} className="text-slate-900" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-indigo-600 shadow-md scale-[0.98]"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    fill
                    src={img}
                    alt="Thumbnail"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Product Info */}
          <div className="lg:sticky lg:top-12 space-y-8">
            <header>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  (24 Reviews)
                </span>
              </div>
              <h1 className="text-4xl xl:text-5xl font-black tracking-tighter text-slate-900 mb-2 leading-tight">
                {product.title}
              </h1>
              <p className="text-3xl font-black text-indigo-600 tracking-tighter">
                ${product.price.toLocaleString()}
              </p>
            </header>

            <div className="space-y-6">
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                {product.description}
              </p>
              {/* Organized Details Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {product.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-slate-100 w-full" />

            {/* Options Section */}
            <section className="space-y-6">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 block">
                  Finish
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all ${
                        selectedColor.name === color.name
                          ? "border-indigo-600 bg-indigo-50/30"
                          : "border-slate-100 hover:border-slate-200"
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-slate-200"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-sm font-bold text-slate-700">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 block">
                  Size
                </label>
                <div className="flex gap-3">
                  {product.variants.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                        selectedSize === size
                          ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                          : "border-slate-100 text-slate-500 hover:border-slate-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interaction Row */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center bg-slate-50 rounded-2xl p-1.5 border border-slate-100">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-white rounded-xl transition-colors text-slate-400 hover:text-indigo-600"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-10 text-center font-black text-lg text-slate-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-white rounded-xl transition-colors text-slate-400 hover:text-indigo-600"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <button className="flex-grow bg-slate-900 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all active:scale-[0.98] py-4 sm:py-0 shadow-xl shadow-slate-100">
                  <ShoppingBag size={20} />
                  Add to Collection
                </button>
              </div>
            </section>

            {/* Footer Trust Features */}
            <footer className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
              <FeatureItem icon={<Truck size={18} />} label="Free Shipping" />
              <FeatureItem
                icon={<ShieldCheck size={18} />}
                label="2 Year Warranty"
              />
              <FeatureItem
                icon={<RotateCcw size={18} />}
                label="30-Day Returns"
              />
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple helper component to keep the main code clean
const FeatureItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100">
      {icon}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tight text-slate-500">
      {label}
    </span>
  </div>
);

export default ProductDetailPage;
