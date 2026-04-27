"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
    // If an error existed for this field, clear it immediately
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const toastId = toast.loading("Logging in to your account...");

    try {
      const res = await fetch("http://localhost:8000/auth/signin", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.message || "";
        setIsLoading(false);
        toast.error(msg || "Signin failed", { id: toastId });

        if (msg.toLowerCase().includes("email")) {
          setErrors((prev) => ({ ...prev, email: msg }));
        }
        if (msg.toLowerCase().includes("password")) {
          setErrors((prev) => ({ ...prev, password: msg }));
        }
        return;
      }

      // Success logic
      toast.success("Sign in successfull! Redirecting to Home...", {
        id: toastId,
      });
      setIsLoading(false);

      setTimeout(() => {
        router.push("/admin");
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Could not connect to server. Please try again.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <header>
        <h3 className="font-sans text-3xl font-black tracking-tight mb-2 text-slate-900">
          Welcome Back
        </h3>
        <p className="text-slate-500 text-sm font-medium">
          Enter your credentials to access your curated collection.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
            Email Address
          </label>
          <input
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={userData.email}
            disabled={isLoading}
            className={`w-full bg-slate-50 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-700 outline-none transition-all ${
              errors.email
                ? "ring-2 ring-rose-500/20 bg-rose-50/50"
                : "focus:ring-2 focus:ring-indigo-500/10 focus:bg-white"
            }`}
            placeholder="name@domain.com"
            type="email"
          />
          {errors.email && (
            <p className="text-[11px] font-bold text-rose-500 ml-2 animate-in fade-in slide-in-from-top-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center px-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Password
            </label>
            <Link
              href="#"
              className="text-[10px] uppercase font-black text-indigo-600 hover:underline"
            >
              Forgot?
            </Link>
          </div>
          <input
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={userData.password}
            disabled={isLoading}
            className={`w-full bg-slate-50 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-700 outline-none transition-all ${
              errors.password
                ? "ring-2 ring-rose-500/20 bg-rose-50/50"
                : "focus:ring-2 focus:ring-indigo-500/10 focus:bg-white"
            }`}
            placeholder="••••••••"
            type="password"
          />
          {errors.password && (
            <p className="text-[11px] font-bold text-rose-500 ml-2 animate-in fade-in slide-in-from-top-1">
              {errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading} // Prevents clicking while true
          className={`col-span-full py-4 bg-gradient-to-br from-[#3525cd] to-[#4f46e5] text-white font-bold rounded-lg shadow-lg transition-all mt-2 ${
            isLoading
              ? "opacity-50 cursor-not-allowed grayscale"
              : "hover:opacity-90 active:scale-[0.98]"
          }`}
        >
          {isLoading ? "Logging in" : "Log in"}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 font-medium">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="text-indigo-600 font-bold hover:underline"
        >
          Sign Up
        </Link>
      </p>

      {/* Simplified Footer */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-100"></span>
        </div>
        <div className="relative flex justify-center text-[10px] uppercase">
          <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">
            External Auth
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="py-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-black text-[10px] uppercase text-slate-600">
          Google
        </button>
        <button className="py-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-black text-[10px] uppercase text-slate-600">
          Github
        </button>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function LoginPage() {
//   const [errors, setErrors] = useState({ email: "", password: "" });

//   return (
//     /* --- CHANGE: Added animate-in and slide-in from bottom to avoid horizontal jumpiness --- */
//     <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
//       <header>
//         <h3 className="font-['Manrope'] text-3xl font-extrabold tracking-tight mb-2 text-[#191c1e]">
//           Welcome Back
//         </h3>
//         <p className="text-[#464555] text-sm">
//           Enter your credentials to access your curated collection.
//         </p>
//       </header>

//       <form className="space-y-4">
//         <div className="space-y-1">
//           <label className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
//             Email Address
//           </label>
//           <input
//             className={`w-full bg-[#f2f4f6] border-none rounded-lg px-4 py-3 focus:ring-1 transition-all outline-none ${errors.email ? "ring-1 ring-red-500 bg-red-50" : "focus:ring-[#3525cd]/40 focus:bg-white"}`}
//             placeholder="name@domain.com"
//             type="email"
//           />
//           {/* --- CHANGE: Conditional Error Rendering --- */}
//           {errors.email && (
//             <p className="text-red-500 text-[11px] font-bold mt-1 uppercase">
//               {errors.email}
//             </p>
//           )}
//         </div>

//         <div className="space-y-1">
//           <div className="flex justify-between items-center">
//             <label className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
//               Password
//             </label>
//             <Link
//               href="#"
//               className="text-[10px] uppercase font-bold text-[#3525cd] hover:underline"
//             >
//               Forgot?
//             </Link>
//           </div>
//           <input
//             className={`w-full bg-[#f2f4f6] border-none rounded-lg px-4 py-3 focus:ring-1 transition-all outline-none ${errors.password ? "ring-1 ring-red-500 bg-red-50" : "focus:ring-[#3525cd]/40 focus:bg-white"}`}
//             placeholder="••••••••"
//             type="password"
//           />
//           {errors.password && (
//             <p className="text-red-500 text-[11px] font-bold mt-1 uppercase">
//               {errors.password}
//             </p>
//           )}
//         </div>

//         <button className="w-full py-4 bg-gradient-to-br from-[#3525cd] to-[#4f46e5] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity mt-4">
//           Sign In
//         </button>
//       </form>

//       {/* --- CHANGE: Added route switch option at the bottom --- */}
//       <p className="text-center text-sm text-[#464555]">
//         Don't have an account?{" "}
//         <Link
//           href="/signup"
//           className="text-[#3525cd] font-bold hover:underline"
//         >
//           Sign Up
//         </Link>
//       </p>

//       {/* Social Options */}
//       <div className="relative py-4">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t border-[#eceef0]"></span>
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-white px-4 text-[#464555] tracking-widest">
//             or continue with
//           </span>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <button className="flex items-center justify-center gap-2 py-3 border border-[#c7c4d8]/30 rounded-lg hover:bg-[#f2f4f6] transition-colors">
//           <span className="material-symbols-outlined text-xl">
//             account_circle
//           </span>
//           <span className="text-xs font-bold uppercase">Google</span>
//         </button>
//         <button className="flex items-center justify-center gap-2 py-3 border border-[#c7c4d8]/30 rounded-lg hover:bg-[#f2f4f6] transition-colors">
//           <span className="material-symbols-outlined text-xl">ios</span>
//           <span className="text-xs font-bold uppercase">Apple</span>
//         </button>
//       </div>
//     </div>
//   );
// }
