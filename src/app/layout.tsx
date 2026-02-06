import type { Metadata } from "next";
import { Jost, EB_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yolanda Hotel | Kahama, Tanzania",
  description: "Experience rustic elegance and contemporary chic at Yolanda Hotel in Kahama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${ebGaramond.variable} ${pinyonScript.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
