import type { Metadata } from "next";
import { Geist, Open_Sans, Alegreya_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

const algreyaSc = Alegreya_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-algreya-sc",
});


export const metadata: Metadata = {
  title: "Vanamithra",
  description:
    "vanamithra products site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${openSans.variable}  ${algreyaSc.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
