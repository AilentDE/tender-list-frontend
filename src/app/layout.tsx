import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NextThemeProvider from "@/store/useTheme";
import RootHeader from "@/components/RootHeader";
import RootFooter from "@/components/RootFooter";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tender Crawler",
  description: "The interface for tender crawler powered by D.E.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextThemeProvider>
          <RootHeader />
          {children}
          <RootFooter />
        </NextThemeProvider>
      </body>
    </html>
  );
}
