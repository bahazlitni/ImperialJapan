import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imperial Japan",
  description: "Official Imperial Japan website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          <div className="app-container">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
