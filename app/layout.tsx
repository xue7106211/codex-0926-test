import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

const title = "Cloud Symphony";
const description = "A dynamic canvas of generative clouds built with Next.js and Tailwind CSS.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="zh-Hans">
      <body className="min-h-screen bg-sky-night-900 font-sans antialiased text-white">
        {children}
      </body>
    </html>
  );
}
