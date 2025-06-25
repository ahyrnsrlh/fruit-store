import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { CartProvider } from "./components/CartProvider"
import { Toaster } from "@/components/ui/toaster"
import { WishlistProvider } from "./components/WishlistProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FreshFruit - Toko Buah Online Premium",
  description:
    "Belanja buah segar berkualitas premium dengan pengiriman cepat ke seluruh Indonesia. Jaminan fresh atau uang kembali.",
  keywords: "buah segar, toko buah online, buah premium, pengiriman buah, buah organik",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
