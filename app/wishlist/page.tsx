"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react"
import { useWishlist } from "../components/WishlistProvider"
import { useCart } from "../components/CartProvider"

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <Heart className="w-24 h-24 text-gray-400 mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Wishlist Kosong</h1>
            <p className="text-gray-600">Belum ada produk yang ditambahkan ke wishlist</p>
          </div>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/products">Mulai Berbelanja</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/products" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Lanjut Belanja
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Wishlist Saya</h1>
            <p className="text-gray-600 mt-2">{items.length} produk dalam wishlist</p>
          </div>
          <Button variant="outline" onClick={clearWishlist} className="text-red-600 border-red-600 hover:bg-red-50">
            <Trash2 className="w-4 h-4 mr-2" />
            Kosongkan Wishlist
          </Button>
        </div>

        {/* Wishlist Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  onClick={() => removeFromWishlist(item.id)}
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white text-red-600"
                >
                  <Heart className="w-4 h-4 fill-red-600" />
                </Button>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">Rp {item.price.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                      })
                    }
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Tambah ke Keranjang
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/products/${item.id}`}>Detail</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
