import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kitab",
  description: "The Better WorkSpace, Your NoteBook Here",
  icons: {
    icon:
    [
    {
      media: "(prefers-color-scheme: light)",
      url: "/LogoLight.svg",
      href: "/LogoLight.svg",
    },
   {
      media: "(prefers-color-scheme: dark)",
      url: "/LogoDark.svg",
      href: "/LogoDark.svg",
    }
  ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
