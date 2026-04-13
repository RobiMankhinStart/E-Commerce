import Image from "next/image";
import React from "react";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";
const CheckoutPage = () => {
  return (
    <main className="pt-10  pb-20 px-6 maxw-7xl mx-auto min-h-screen bg-[#f7f9fb] font-['Inter']">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Checkout Stepper & Forms */}
        <div className="lg:col-span-8 space-y-12 ml-10 ">
          {/* Stepper Progress */}
          <div className="flex items-center justify-between max-w-md">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#3525cd] flex items-center justify-center text-white font-bold">
                1
              </div>
              <span className="text-xs font-bold text-[#191c1e] uppercase tracking-widest">
                Shipping
              </span>
            </div>
            <div className="h-[2px] flex-grow bg-[#eceef0] mx-4 mt-[-1.5rem]"></div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full border-2 border-[#c7c4d8] bg-white flex items-center justify-center text-[#464555] font-bold">
                2
              </div>
              <span className="text-xs font-medium text-[#464555] uppercase tracking-widest">
                Payment
              </span>
            </div>
            <div className="h-[2px] flex-grow bg-[#eceef0] mx-4 mt-[-1.5rem]"></div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full border-2 border-[#c7c4d8] bg-white flex items-center justify-center text-[#464555] font-bold">
                3
              </div>
              <span className="text-xs font-medium text-[#464555] uppercase tracking-widest">
                Review
              </span>
            </div>
          </div>

          {/* Section 1: Shipping Address */}
          <section className="bg-white p-8 lg:p-12 rounded-xl shadow-sm border border-[#eceef0]">
            <h2 className="text-3xl font-bold tracking-tight mb-8 font-['Manrope'] text-[#191c1e]">
              Shipping Address
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#464555] uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    className="w-full bg-[#f2f4f6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white transition-all duration-200 outline-none"
                    placeholder="Julian"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#464555] uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    className="w-full bg-[#f2f4f6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white transition-all duration-200 outline-none"
                    placeholder="Leigh"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#464555] uppercase tracking-wider">
                  Street Address
                </label>
                <input
                  className="w-full bg-[#f2f4f6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white transition-all duration-200 outline-none"
                  placeholder="124 Editorial Lane, Apt 4B"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="col-span-2 md:col-span-1 space-y-1">
                  <label className="text-xs font-bold text-[#464555] uppercase tracking-wider">
                    City
                  </label>
                  <input
                    className="w-full bg-[#f2f4f6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white transition-all duration-200 outline-none"
                    placeholder="New York"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#464555] uppercase tracking-wider">
                    State
                  </label>
                  <select className="w-full bg-[#f2f4f6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white transition-all duration-200 outline-none appearance-none">
                    <option>New York</option>
                    <option>California</option>
                    <option>Texas</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#464555] uppercase tracking-wider">
                    ZIP Code
                  </label>
                  <input
                    className="w-full bg-[#f2f4f6] border-none rounded-lg p-4 focus:ring-2 focus:ring-[#3525cd]/20 focus:bg-white transition-all duration-200 outline-none"
                    placeholder="10001"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <input
                  className="w-5 h-5 rounded text-[#3525cd] focus:ring-[#3525cd] border-[#c7c4d8]"
                  id="save-info"
                  type="checkbox"
                />
                <label className="text-sm text-[#464555]" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>
            </form>
          </section>

          {/* Section 2: Payment Method */}
          <section className="bg-[#f2f4f6] p-8 lg:p-12 rounded-xl opacity-90 grayscale-[0.5]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight font-['Manrope'] text-[#191c1e]">
                Payment Method
              </h2>
              <span className="text-xs font-bold text-[#3525cd] uppercase tracking-widest">
                Next Step
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card Option */}
              <div className="relative p-6 rounded-xl border-2 border-[#3525cd] bg-white shadow-sm cursor-pointer group">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-[#3525cd] text-3xl">
                    credit_card
                  </span>
                  <div className="w-5 h-5 rounded-full border-4 border-[#3525cd]"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-['Manrope']">
                    Stripe / Online
                  </h3>
                  <p className="text-sm text-[#464555]">
                    Secure credit card and digital wallet payment.
                  </p>
                </div>
              </div>
              {/* COD Option */}
              <div className="relative p-6 rounded-xl border-2 border-transparent bg-white hover:border-[#c7c4d8] transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-[#464555] text-3xl">
                    payments
                  </span>
                  <div className="w-5 h-5 rounded-full border-2 border-[#c7c4d8]"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-['Manrope']">
                    Cash on Delivery
                  </h3>
                  <p className="text-sm text-[#464555]">
                    Pay in person when your order arrives.
                  </p>
                </div>
              </div>
            </div>
            {/* Secure Badge */}
            <div className="mt-8 flex items-center justify-center space-x-3 text-[#464555] opacity-60">
              <span className="material-symbols-outlined text-sm">lock</span>
              <span className="text-xs uppercase tracking-widest font-bold">
                256-bit SSL Secure Payment Gateway
              </span>
            </div>
          </section>

          {/* CTA Navigation */}
          <div className="flex items-center justify-between pt-8">
            <Link
              href={`/cart`}
              className="text-sm font-bold text-[#3525cd] flex items-center group transition-colors"
            >
              <span className="material-symbols-outlined mr-2 transition-transform group-hover:-translate-x-1">
                <ArrowBigLeftDash />
              </span>
              Back to Cart
            </Link>
            <button className="px-10 py-4 rounded-lg bg-gradient-to-br from-[#3525cd] to-[#4f46e5] text-white font-bold text-lg shadow-xl hover:opacity-90 transition-all active:scale-95">
              Continue to Review
            </button>
          </div>
        </div>

        {/* Right Column: Order Summary (Sticky) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-10 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#eceef0]">
              <h3 className="text-xl font-bold mb-8 font-['Manrope'] text-[#191c1e]">
                Order Summary
              </h3>
              {/* Cart Items */}
              <div className="space-y-6 mb-8">
                <CartItem
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuCOECyJWclIsKWavOVY9SMlD5JV5Bf5xvQTGBFrQL-rG1gr1HGVGHpnUkd2RWMIbCPjT_45bBdi0FQERWEn69opOwIOw_qbLqT4WS_CQU6DOmPU6MaVR3BUB_DJV1ELeFcG6xLaZaB8M3EkdBA4dVPLmmofxuHZMHeQ4L7Qu7B7ijWs_efM5f7g6QOwwomGRfO8HHusbuPMoKPefExWYgwliSaP2lIHXp7ZQSN4Pn_riJfDU_czeixsnPmJt_LEmmn3iCIZtEWOaTw"
                  name="Sculptural Form Vase"
                  details="Size: Large / White"
                  price="$185.00"
                />
                <CartItem
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDoKYG1q2x6uvdq3n7si-2aU21XawrsY4uXk1UupDYDMBFUwF6fNCsUIqoi1DK8ziujyuLKqZOLkAc_zbt8LCdslpRv33S_Jz1ROwd-zoaRour_L6d5MJlRreLHrpOCUFjAC0ylfMziu2ce0URJYhCSK-B4-152cCuxZPxlE4TG6KrIx8as-YXIHi_7HPuviKWramhIX6MlryZBqJ1iqGf23hqxq5kBdTHbwxzFoEVYnTjlGmRC_MVUiDMQKv38LGq1vlL3XfS0t8k"
                  name="Essential Lounge Set"
                  details="Size: M / Charcoal"
                  price="$240.00"
                />
              </div>
              {/* Calculations */}
              <div className="space-y-4 border-t border-[#eceef0] pt-8">
                <div className="flex justify-between text-sm">
                  <span className="text-[#464555]">Subtotal</span>
                  <span className="font-medium">$425.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#464555]">Shipping (Express)</span>
                  <span className="font-medium">$25.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#464555]">Estimated Tax</span>
                  <span className="font-medium">$34.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4 border-t border-[#eceef0]">
                  <span className="font-['Manrope']">Total</span>
                  <span className="text-[#3525cd]">$484.00</span>
                </div>
              </div>
              {/* Promo Code */}
              <div className="mt-8 flex space-x-2">
                <input
                  className="flex-grow bg-[#f2f4f6] border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#3525cd]/40 outline-none"
                  placeholder="Promo code"
                  type="text"
                />
                <button className="bg-[#e6e8ea] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#e0e3e5] transition-colors">
                  Apply
                </button>
              </div>
            </div>
            {/* Trust Signals */}
            <div className="p-6 bg-[#e6e8ea]/30 rounded-xl space-y-4">
              <div className="flex items-center space-x-4">
                <span className="material-symbols-outlined text-[#3525cd]">
                  verified_user
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#191c1e]">
                    Premium Guarantee
                  </p>
                  <p className="text-[10px] text-[#464555]">
                    Full refund within 30 days of purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

// Reusable component for Cart Items
const CartItem = ({ image, name, details, price }) => (
  <div className="flex space-x-4">
    <div className="relative w-20 h-24 bg-[#f2f4f6] rounded-lg overflow-hidden flex-shrink-0">
      <Image
        fill
        className="w-full h-full object-cover"
        src={image}
        alt={name}
      />
    </div>
    <div className="flex flex-col justify-between py-1">
      <div>
        <h4 className="font-bold text-sm text-[#191c1e]">{name}</h4>
        <p className="text-xs text-[#464555]">{details}</p>
      </div>
      <span className="font-bold text-sm text-[#191c1e]">{price}</span>
    </div>
  </div>
);

export default CheckoutPage;
