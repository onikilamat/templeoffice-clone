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
  title: "Temple Office",
  description: "Temple Office",
  openGraph: {
    title: "Temple Office",
    description: "Temple Office",
    url: "https://templeoffice.co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temple Office",
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
