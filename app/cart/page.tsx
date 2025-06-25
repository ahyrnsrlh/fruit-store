"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../components/CartProvider";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Keranjang Kosong
            </h1>
            <p className="text-gray-600">
              Belum ada produk yang ditambahkan ke keranjang
            </p>
          </div>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/products">Mulai Berbelanja</Link>
          </Button>
        </div>
      </div>
    );
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
            <h1 className="text-3xl font-bold text-gray-900">
              Keranjang Belanja
            </h1>
            <p className="text-gray-600 mt-2">
              {items.length} produk dalam keranjang
            </p>
          </div>
          <Button
            variant="outline"
            onClick={clearCart}
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Kosongkan Keranjang
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-3xl font-bold text-green-600">
                          Rp {item.price.toLocaleString("id-ID")}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Per 1kg</p>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 p-0 rounded-md border-gray-300"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="text-lg font-semibold w-12 text-center bg-white px-3 py-1 rounded border">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-8 w-8 p-0 rounded-md border-gray-300"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Subtotal</p>
                          <p className="text-xl font-bold text-gray-900">
                            Rp{" "}
                            {(item.price * item.quantity).toLocaleString(
                              "id-ID"
                            )}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 ml-4"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        Rp{" "}
                        {(item.price * item.quantity).toLocaleString("id-ID")}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">
                      Rp {total.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ongkos Kirim</span>
                    <span className="font-medium text-green-600">
                      {total >= 100000 ? "GRATIS" : "Rp 15.000"}
                    </span>
                  </div>
                  {total < 100000 && (
                    <p className="text-xs text-gray-500">
                      Belanja Rp {(100000 - total).toLocaleString("id-ID")} lagi
                      untuk gratis ongkir
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-600">
                    Rp{" "}
                    {(total + (total >= 100000 ? 0 : 15000)).toLocaleString(
                      "id-ID"
                    )}
                  </span>
                </div>

                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg"
                >
                  <Link href="/checkout">Lanjut ke Pembayaran</Link>
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <Link href="/products">Lanjut Belanja</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
