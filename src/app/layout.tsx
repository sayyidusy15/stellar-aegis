import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stellar Aegis — Authorization Control Plane for Stellar Smart Accounts",
  description: "Aegis brings granular session policies, passkey-native authentication, and lifecycle-aware authorization to Stellar — without replacing your Smart Account.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-[#8a8a8a] font-sans selection:bg-[#1f1f1f] selection:text-[#ffffff]">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
