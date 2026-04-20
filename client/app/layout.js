import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "../app/components/Provider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "CURATOR | Modern Architectural Essentials",
  description:
    "A meticulously curated selection of architectural objects and editorial-grade apparel for the modern observer.",
  // viewport: "width=device-width, initial-scale=1",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-slate-900 min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
