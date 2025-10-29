import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🧭 Importa el Navbar
import Navbar from "../../components/Layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inspectia | Evaluador de Calidad Web",
  description: "Evalúa la calidad de tus sitios web según estándares de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* 🔹 Navbar visible en todas las páginas */}
        <Navbar />

        {/* 🔹 Contenido dinámico de cada página */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}