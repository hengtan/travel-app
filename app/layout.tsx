import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Travel App",
  description: "Travelling made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>          
        <footer/>
      </body>
    </html>
  );
}
