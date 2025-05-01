import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

import { Header } from "./components";
import AOSInitializer from './components/AOSInitializer';

export const metadata: Metadata = {
  title: "OMAR DIAB",
  description: "Portfolio of Omar Diab, a full stack web developer specializing in modern web apps using letast tools",
  keywords: [
    "Omar Diab",
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Omar Diab" }],
  creator: "Omar Diab",
  publisher: "Omar Diab",
  icons: {
    icon: "/favicon.ico",
  }
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", '600', "700", "800", "900"],
});

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} max-w-[1300px] mx-auto`}>
        <AOSInitializer />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
