"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Menu, Search, User, Heart } from "lucide-react"
import { useCart } from "./CartProvider"
import { useWishlist } from "./WishlistProvider"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🍎</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Buahnesia</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Beranda
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Produk
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Tentang
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Kontak
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Cari buah favorit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-green-500"
              />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm" className="hidden md:flex relative">
              <Link href="/wishlist">
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button asChild variant="ghost" size="sm" className="relative">
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium text-gray-700 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Beranda
                  </Link>
                  <Link
                    href="/products"
                    className="text-lg font-medium text-gray-700 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Produk
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium text-gray-700 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Tentang
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-gray-700 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Kontak
                  </Link>
                  <Link
                    href="/wishlist"
                    className="text-lg font-medium text-gray-700 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Wishlist ({wishlistItems.length})
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
