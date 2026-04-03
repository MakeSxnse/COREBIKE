import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import SmoothScrolling from "./lenis";

// 1. Nastavení fontů
const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '400', '700'], 
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Core Bike Finder",
  description: "Najdi své nové MTB do minuty",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${outfit.className} min-h-full bg-[#1B1B1B] text-white select-none`}>
        {/* Lenis obaluje celou aplikaci pro smooth scroll */}
        <SmoothScrolling>
          <Nav />
          <main>
            {children}
          </main>
        </SmoothScrolling>
      </body>
    </html>
  );
}