"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Search, Heart } from "lucide-react"
import { searchProducts } from "@/lib/products"
import { useCart } from "../components/CartProvider"
import { useWishlist } from "../components/WishlistProvider"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [searchResults, setSearchResults] = useState(searchProducts(initialQuery))
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    const results = searchProducts(searchQuery)
    setSearchResults(results)
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const results = searchProducts(searchQuery)
    setSearchResults(results)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pencarian Produk</h1>
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Cari buah favorit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700"
              >
                Cari
              </Button>
            </div>
          </form>
        </div>

        {/* Search Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {searchResults.length > 0
              ? `Ditemukan ${searchResults.length} produk untuk "${searchQuery}"`
              : `Tidak ada produk yang ditemukan untuk "${searchQuery}"`}
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-green-600 text-white">{product.badge}</Badge>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      Rp {product.originalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{product.reviews.length} ulasan</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.images[0],
                        })
                      }
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      Tambah ke Keranjang
                    </Button>
                    <Button
                      onClick={() =>
                        isInWishlist(product.id)
                          ? removeFromWishlist(product.id)
                          : addToWishlist({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.images[0],
                            })
                      }
                      variant="outline"
                      size="sm"
                      className={isInWishlist(product.id) ? "text-red-600 border-red-600" : ""}
                    >
                      <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-red-600" : ""}`} />
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/products/${product.id}`}>Detail</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-24 h-24 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Produk tidak ditemukan</h2>
            <p className="text-gray-600 mb-6">Coba gunakan kata kunci yang berbeda atau jelajahi kategori kami</p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/products">Lihat Semua Produk</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
