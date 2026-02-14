import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroyRegular = localFont({
  src: "../public/fonts/Gilroy-Regular.ttf",
  variable: "--font-gilroy-regular",
  weight: "400",
});

const gilroyBold = localFont({
  src: "../public/fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Panto - Furniture Store",
  description: "Make Your Interior More Minimalistic & Modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroyRegular.variable} ${gilroyBold.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
