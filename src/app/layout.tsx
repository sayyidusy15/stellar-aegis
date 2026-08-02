import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stellar-Aegis Documentation | Soroban Account Abstraction & Policy Engine",
  description: "Official technical documentation for Stellar-Aegis: Modular Account Abstraction, Passkeys, Ephemeral Sessions, Gas Sponsorship, and Policy Engine for Soroban.",
  keywords: ["Stellar", "Soroban", "Account Abstraction", "Passkeys", "WebAuthn", "Smart Account", "Policy Engine", "Gas Sponsorship"],
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
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-500">
        {children}
      </body>
    </html>
  );
}
