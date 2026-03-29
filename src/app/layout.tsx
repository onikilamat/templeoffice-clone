import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const citizenGrotesk = localFont({
  src: "../fonts/CitizenGrotesk-Poster.woff",
  weight: "900",
  style: "normal",
  variable: "--font-citizen-grotesk",
});

const authenticSans = localFont({
  src: "../fonts/AUTHENTICSans-90.woff",
  weight: "400",
  style: "normal",
  variable: "--font-authentic-sans",
});

export const metadata: Metadata = {
  title: "MAGNEZYUM",
  description: "MAGNEZYUM",
  openGraph: {
    title: "MAGNEZYUM",
    description: "MAGNEZYUM",
    url: "https://mag.nezyum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGNEZYUM",
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
      className={`${citizenGrotesk.variable} ${authenticSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
