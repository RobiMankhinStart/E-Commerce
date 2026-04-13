import React from "react";

import Image from "next/image";
import HeroSlider from "../components/Home/HeroSlider";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Shop by Intent / Categories */}
      <section className="px-8 max-w-screen-2xl mx-auto w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Categories
            </span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Shop by Intent
            </h2>
          </div>
          <button className="text-sm font-bold flex items-center gap-2 hover:text-indigo-600 transition-colors">
            All Categories <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 h-[600px]">
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-slate-900">
            <Image
              fill
              src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200"
              alt="Living"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-2">Living</h3>
              <p className="text-slate-200 text-sm max-w-xs">
                Elevated environments for daily rituals.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-rows-2 gap-4">
            <div className="relative group overflow-hidden rounded-2xl bg-orange-100">
              <Image
                fill
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1200"
                alt="Apparel"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-slate-900">Apparel</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=600"
                  alt="Objects"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-slate-900">Objects</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600"
                  alt="Footwear"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-slate-900">Footwear</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-8 max-w-screen-2xl mx-auto w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            New Arrivals
          </h2>
          <div className="flex gap-2">
            <button className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
              ←
            </button>
            <button className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-2xl bg-slate-100 overflow-hidden mb-4 relative">
                <Image
                  fill
                  src={`https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400`}
                  alt="Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">
                  Limited
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    The Modular Trench
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Italian wool blend
                  </p>
                </div>
                <span className="font-bold text-slate-900">$420</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial / CTA */}
      <section className="px-8 max-w-screen-2xl mx-auto w-full">
        <div className="bg-indigo-600 rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          <div className="flex-1 p-16 flex flex-col justify-center">
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-4">
              Summer Editorial
            </span>
            <h2 className="text-6xl font-black text-white leading-tight mb-6">
              The Art of <br /> Living Well
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-md">
              Join our newsletter for early access to the upcoming capsule
              collection and exclusive editorial content.
            </p>
            <div className="flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="email@example.com"
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 ring-white/30"
              />
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex-1 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
            </div>
            {/* Visual pattern or abstract image would go here */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
