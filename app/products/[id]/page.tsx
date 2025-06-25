"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "../../components/CartProvider";
import { getProductById } from "@/lib/products";
import { useWishlist } from "../../components/WishlistProvider";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const resolvedParams = use(params);
  const product = getProductById(Number.parseInt(resolvedParams.id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Produk tidak ditemukan
          </h1>
          <Button asChild>
            <Link href="/products">Kembali ke Produk</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Button asChild variant="ghost" size="sm">
            <Link href="/products" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Produk
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                {product.badge}
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-green-600"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-600">
                    ({product.reviews?.length} ulasan)
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  {product.category}
                </Badge>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-green-600">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </span>
                <Badge className="bg-red-100 text-red-800">
                  Hemat{" "}
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  %
                </Badge>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3">Deskripsi</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Keunggulan Produk</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Jumlah ({product.weight})
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
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
                  size="lg"
                  className={`px-6 ${
                    isInWishlist(product.id)
                      ? "text-red-600 border-red-600"
                      : ""
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isInWishlist(product.id) ? "fill-red-600" : ""
                    }`}
                  />
                </Button>
                <Button variant="outline" size="lg" className="px-6">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">
                  Total: Rp {(product.price * quantity).toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            <Separator />

            {/* Shipping Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">
                  Gratis ongkir untuk pembelian di atas Rp 100.000
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">
                  Jaminan fresh atau uang kembali 100%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Facts */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Informasi Nutrisi</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {product.nutritionFacts.calories}
                </div>
                <div className="text-sm text-gray-600">Kalori</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {product.nutritionFacts.carbs}
                </div>
                <div className="text-sm text-gray-600">Karbohidrat</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {product.nutritionFacts.fiber}
                </div>
                <div className="text-sm text-gray-600">Serat</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {product.nutritionFacts.sugar}
                </div>
                <div className="text-sm text-gray-600">Gula</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {product.nutritionFacts.vitaminC}
                </div>
                <div className="text-sm text-gray-600">Vitamin C</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Ulasan Pelanggan</h3>
            <div className="space-y-6">
              {product.reviews?.map((review) => (
                <div
                  key={review.id}
                  className="border-b border-gray-200 pb-6 last:border-b-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold">
                          {review.userName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{review.userName}</div>
                        <div className="text-sm text-gray-500">
                          {review.date}
                        </div>
                      </div>
                      {review.verified && (
                        <Badge className="bg-green-100 text-green-800">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
