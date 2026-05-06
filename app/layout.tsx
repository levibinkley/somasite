import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soma — Personalized Daily Nutrition",
  description:
    "A premium landing page for Soma, personalized daily nutrition built around your biology.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
