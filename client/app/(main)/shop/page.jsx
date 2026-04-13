import BreadCrumb from "@/app/components/commonUI/BreadCrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    title: "Observer Chair",
    price: "$1,250",
    description: "Natural Oak & Bouclé",
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop",
    tag: "New Arrival",
  },
  {
    id: 2,
    title: "Tonal Vessel Lamp",
    price: "$420",
    description: "Hand-fired Clay",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
    tag: null,
  },
  {
    id: 3,
    title: "Structural Trench",
    price: "$2,800",
    description: "Virgin Wool & Silk Blend",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    tag: "Limited Edition",
  },
  {
    id: 4,
    title: "Temporal Steel Watch",
    price: "$1,850",
    description: "Brushed Titanium",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    tag: null,
  },
  {
    id: 5,
    title: "Fluid Glass Suite",
    price: "$180",
    description: "Borosilicate Glass",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=1000&auto=format&fit=crop",
    tag: null,
  },
  {
    id: 6,
    title: "Monolith Side Table",
    price: "$950",
    description: "Honed Nero Marquina",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop",
    tag: "Restocked",
  },
];

const ShopPage = () => {
  const breadcrumbItems = [
    { name: "Shop", href: "/shop" },
    // { name: "Our Collection", href: "/shop/collection" },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">
      <main className="pt-8 pb-20 max-w-screen-2xl mx-auto px-6 lg:px-12">
        <BreadCrumb items={breadcrumbItems} />

        {/* Header Section */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-3 block">
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-none">
              The Seasonal Edit
            </h1>
            <p className="mt-6 text-slate-500 max-w-xl text-lg leading-relaxed font-medium">
              A meticulously curated selection of architectural objects and
              editorial-grade apparel for the modern observer.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
              <span className="text-sm font-bold text-slate-700">
                Sort by: Popularity
              </span>
              <svg
                className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Sidebar Filter */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-12">
              <section>
                <h3 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-8 flex items-center justify-between">
                  Categories
                </h3>
                <ul className="space-y-6">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-between group"
                    >
                      <span className="text-indigo-600 font-bold text-sm">
                        All Items
                      </span>
                      <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">
                        124
                      </span>
                    </a>
                  </li>
                  {["Furniture", "Objects", "Apparel", "Lighting"].map(
                    (cat) => (
                      <li key={cat}>
                        <a
                          href="#"
                          className="flex items-center justify-between text-slate-500 hover:text-indigo-600 transition-colors font-bold text-sm"
                        >
                          <span>{cat}</span>
                          <span className="text-[10px] font-bold text-slate-300 group-hover:text-indigo-300">
                            28
                          </span>
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </section>

              <section>
                <h3 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-8">
                  Price Range
                </h3>
                <div className="px-2">
                  <div className="h-1 w-full bg-slate-200 rounded-full relative">
                    <div className="absolute inset-0 right-1/4 bg-indigo-600 rounded-full"></div>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full shadow-sm cursor-pointer"></div>
                    <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-4 h-4 bg-white border-2 border-indigo-600 rounded-full shadow-sm cursor-pointer"></div>
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    <span>$0</span>
                    <span>$2,500+</span>
                  </div>
                </div>
              </section>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-20 gap-x-12">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative aspect-8/9 overflow-hidden rounded-[32px] bg-slate-100 mb-8">
                    <Image
                      fill
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />

                    {product.tag && (
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                        {product.tag}
                      </div>
                    )}

                    <button className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-indigo-600 hover:text-white group/btn">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex justify-between items-start px-2">
                    <Link href={`/shop/${product.id}`}>
                      <h3 className="font-bold text-2xl text-slate-900 group-hover:text-indigo-600 transition-colors mb-1 tracking-tight">
                        {product.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-semibold tracking-tight">
                        {product.description}
                      </p>
                    </Link>
                    <span className="font-black text-xl text-slate-900 tracking-tighter">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-32 flex justify-center items-center gap-4">
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex gap-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    className={`w-12 h-12 rounded-full font-bold text-sm transition-all ${num === 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "text-slate-400 hover:bg-slate-100"}`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
