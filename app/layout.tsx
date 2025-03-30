import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/providers/cart-context";

const dmmono = DM_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dmmono",
});

export const metadata: Metadata = {
  title: "Headless Woo",
  description: "Headless Woo by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmmono.variable}  antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
