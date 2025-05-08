"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const productId = params.id
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("Hitam")
  const [isInWishlist, setIsInWishlist] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock product data
  const product = {
    id: productId,
    name: `Produk ${productId}`,
    description: "Deskripsi lengkap produk ini. Produk berkualitas tinggi dengan bahan premium dan desain modern.",
    price: 299000,
    rating: 4.5,
    reviews: 120,
    images: [
      `/placeholder.svg?height=600&width=600&text=Produk+${productId}`,
      `/placeholder.svg?height=600&width=600&text=Produk+${productId}+View+2`,
      `/placeholder.svg?height=600&width=600&text=Produk+${productId}+View+3`,
      `/placeholder.svg?height=600&width=600&text=Produk+${productId}+View+4`,
    ],
    features: ["Bahan berkualitas tinggi", "Desain modern dan elegan", "Nyaman digunakan", "Tahan lama"],
    specifications: {
      Bahan: "Premium",
      Ukuran: "M, L, XL",
      Warna: "Hitam, Putih, Biru",
      Berat: "500 gram",
    },
  }

  // Mock related products
  const relatedProducts = Array.from({ length: 4 }, (_, i) => ({
    id: Number(productId) + i + 1,
    name: `Produk ${Number(productId) + i + 1}`,
    price: 299000 + i * 10000,
    image: `/placeholder.svg?height=300&width=300&text=Produk+${Number(productId) + i + 1}`,
  }))

  const handleAddToCart = () => {
    toast({
      title: "Success: Produk ditambahkan ke keranjang",
      description: `${product.name} (${selectedColor}, ${selectedSize}) - ${quantity} item`,
      variant: "default",
    })
  }

  const handleAddToWishlist = () => {
    setIsInWishlist((prev) => !prev)
    toast({
      title: `Success: ${isInWishlist ? "Produk dihapus dari" : "Produk ditambahkan ke"} wishlist`,
      description: `${product.name} telah ${isInWishlist ? "dihapus dari" : "ditambahkan ke"} wishlist Anda`,
      variant: "default",
    })
  }

  return (
    <div className="container px-4 py-8 md:py-12 bg-gradient-to-b to-white mt-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className={`space-y-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <div className="relative aspect-square overflow-hidden rounded-lg border border-purple-100 shadow-md">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square overflow-hidden rounded-lg border cursor-pointer transition-all duration-300 ${
                  selectedImage === index
                    ? "border-purple-500 ring-2 ring-purple-300 scale-105"
                    : "border-purple-100 hover:border-purple-300"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className={`space-y-6 ${isLoaded ? "animate-slide-in" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : i < product.rating
                          ? "text-yellow-400 fill-yellow-400 opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} ulasan)
              </span>
            </div>
          </div>

          <div>
            <span className="text-3xl font-bold text-purple-700">Rp {product.price.toLocaleString("id-ID")}</span>
            <p className="text-sm text-green-600 mt-1">Stok tersedia</p>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-purple-900">Ukuran</h3>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className={`h-10 w-10 rounded-md p-0 transition-all ${
                        selectedSize === size
                          ? "bg-purple-100 border-purple-500 text-purple-700"
                          : "border-purple-200 text-purple-700 hover:bg-purple-50"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2 text-purple-900">Warna</h3>
                <div className="flex gap-2">
                  {[
                    { name: "Hitam", color: "bg-black" },
                    { name: "Putih", color: "bg-white border" },
                    { name: "Biru", color: "bg-blue-500" },
                  ].map((color) => (
                    <div
                      key={color.name}
                      className={`h-10 w-10 rounded-full ${color.color} cursor-pointer transition-all ${
                        selectedColor === color.name ? "ring-2 ring-purple-500 scale-110" : "hover:scale-105"
                      }`}
                      title={color.name}
                      onClick={() => setSelectedColor(color.name)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-purple-900">Jumlah</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-r-none border-purple-200 text-purple-600 hover:bg-purple-100"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex h-10 w-12 items-center justify-center border-y border-purple-200">{quantity}</div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-l-none border-purple-200 text-purple-600 hover:bg-purple-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="w-full min-h-[50px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 sm:flex-1 sm:min-h-[48px]"
              size="lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Tambah ke Keranjang
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`w-full min-h-[50px] ${isInWishlist ? "bg-purple-100 border-purple-500 text-purple-700" : "border-purple-300 text-purple-600 hover:bg-purple-100 hover:text-purple-700"} transition-all hover:scale-105 sm:w-auto sm:min-h-[48px]`}
              onClick={handleAddToWishlist}
            >
              <Heart className={`mr-2 h-5 w-5 ${isInWishlist ? "fill-purple-500" : ""}`} />
              Wishlist
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 border-purple-300 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-all hover:scale-105 sm:w-10 sm:h-10"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                toast({
                  title: "Link disalin",
                  description: "Link produk telah disalin ke clipboard",
                })
              }}
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs
        defaultValue="description"
        className={`mb-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.5s" }}
      >
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-700 transition-all"
          >
            Deskripsi
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-700 transition-all"
          >
            Spesifikasi
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:text-purple-700 transition-all"
          >
            Ulasan
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-4 animate-fade-in">
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <p>{product.description}</p>
            <h3 className="text-lg font-semibold text-purple-900">Fitur Utama</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="specifications" className="pt-4 animate-fade-in">
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold text-purple-700">Spesifikasi Produk</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex border-b border-purple-100 pb-2">
                  <span className="font-medium w-24 text-purple-900">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-4 animate-fade-in">
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-purple-700">{product.rating}</div>
              <div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < product.rating
                            ? "text-yellow-400 fill-yellow-400 opacity-50"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">Berdasarkan {product.reviews} ulasan</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105">
              Tulis Ulasan
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div className={isLoaded ? "animate-fade-in" : "opacity-0"} style={{ animationDelay: "0.7s" }}>
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Produk Terkait
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
          {relatedProducts.map((product, i) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <Card
                className={`overflow-hidden transition-all hover-lift ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${0.8 + i * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden group">
                  <Image
                    alt={product.name}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    src={product.image || "/placeholder.svg"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <Button size="sm" className="w-full bg-white text-purple-600 hover:bg-white/90">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Lihat Detail
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 bg-gradient-to-br from-white to-purple-50">
                  <h3 className="font-semibold text-lg text-purple-900">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-bold text-purple-700">Rp {product.price.toLocaleString("id-ID")}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-300 text-purple-600 hover:bg-purple-100"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}