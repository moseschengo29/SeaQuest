import type { Metadata } from "next";
import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/src/components/ui/ClientLayout"; // Kept your 'src' path

// 1. Define BOTH with variables
const oswald = Oswald({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  variable: '--font-oswald' 
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: '--font-manrope' 
});

export const metadata: Metadata = {
  title: "SeaQuest Kenya | Deep Sea Sport Fishing",
  description: "Premier deep sea fishing charters in Watamu and Malindi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 2. Use variables for both, and add 'font-sans' to trigger Tailwind */}
      <body className={`${manrope.variable} ${oswald.variable} font-sans overflow-x-hidden bg-[#050505]`}>
        <ClientLayout fontClass={oswald.className}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}