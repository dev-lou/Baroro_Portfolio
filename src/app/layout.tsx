import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lou Vincent Baroro — Full Stack Architect & AI-Native Developer",
  description:
    "Full Stack Web & Mobile Architect. AI-Native Developer. CTO & Co-Founder @ Syntaxure Labs. Building production-ready platforms on zero-budget infrastructure.",
  keywords: [
    "full stack developer",
    "AI developer",
    "web architect",
    "mobile developer",
    "Syntaxure Labs",
    "Lou Vincent Baroro",
  ],
  authors: [{ name: "Lou Vincent Baroro" }],
  openGraph: {
    title: "Lou Vincent Baroro — Full Stack Architect & AI-Native Developer",
    description:
      "Building production-ready, SEO-optimized web platforms, mobile apps, and AI engines on 100% free-tier infrastructure.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
