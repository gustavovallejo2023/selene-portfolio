import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import BootstrapClient from "@/components/BootstrapClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selene Vallejo | Nail Artist",
  description: "Portfolio profesional de Selene Vallejo - Nail Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>

        <BootstrapClient />

        {children}

      </body>
    </html>
  );
}