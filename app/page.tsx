"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone Premium",
      description: "Smartphone canggih dengan kamera 108MP dan baterai tahan lama",
      price: 8999000,
      image: "/placeholder.svg?height=300&width=300&text=Smartphone",
    },
    {
      id: 2,
      name: "Sneakers Modern",
      description: "Sepatu sneakers nyaman dengan desain modern dan stylish",
      price: 1299000,
      image: "/placeholder.svg?height=300&width=300&text=Sneakers",
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Jam tangan pintar dengan fitur kesehatan dan notifikasi",
      price: 2499000,
      image: "/placeholder.svg?height=300&width=300&text=Smartwatch",
    },
    {
      id: 4,
      name: "Headphone Wireless",
      description: "Headphone nirkabel dengan noise cancelling dan suara premium",
      price: 1899000,
      image: "/placeholder.svg?height=300&width=300&text=Headphone",
    },
  ]

  // Latest articles data
  const latestArticles = [
    {
      id: 1,
      title: "10 Tren Fashion Terbaru 2023",
      excerpt:
        "Temukan tren fashion terbaru yang akan mendominasi tahun 2023, dari vintage revival hingga sustainable fashion.",
      date: "15 Mei 2023",
      readTime: "5 menit membaca",
      category: "Fashion",
      image: "/placeholder.svg?height=200&width=400&text=Fashion+Trends",
    },
    {
      id: 2,
      title: "Review Gadget Terbaru",
      excerpt: "Ulasan mendalam tentang smartphone, laptop, dan gadget terbaru yang dirilis bulan ini.",
      date: "12 Mei 2023",
      readTime: "7 menit membaca",
      category: "Teknologi",
      image: "/placeholder.svg?height=200&width=400&text=Gadget+Review",
    },
    {
      id: 3,
      title: "Tips Hidup Sehat di Era Digital",
      excerpt: "Bagaimana menjaga kesehatan fisik dan mental di tengah gempuran teknologi dan gaya hidup digital.",
      date: "10 Mei 2023",
      readTime: "6 menit membaca",
      category: "Kesehatan",
      image: "/placeholder.svg?height=200&width=400&text=Health+Tips",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[40%] -right-[10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-[30%] -left-[10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center relative">
            <div
              className={`flex flex-col justify-center space-y-4 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Temukan Produk Berkualitas untuk Gaya Hidup Modern
                </h1>
                <p className="max-w-[600px] text-gray-100 md:text-xl">
                  Koleksi produk terbaik dan artikel informatif untuk memenuhi kebutuhan Anda.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="px-8 bg-white text-purple-600 hover:bg-gray-100 hover:scale-105 transition-all"
                  >
                    Lihat Produk
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/articles">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 border-white text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    Baca Artikel
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className={`mx-auto lg:ml-auto ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "0.5s" }}
            >
              <Image
                alt="Hero Image"
                className="rounded-xl object-cover shadow-2xl hover-lift"
                height={400}
                src="/placeholder.svg?height=400&width=600&text=Modern+Lifestyle"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Produk Unggulan
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Produk terbaik pilihan kami untuk memenuhi kebutuhan Anda.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 stagger-animation">
            {featuredProducts.map((product, i) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Card
                  className={`overflow-hidden transition-all hover-lift ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
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
                  <CardContent className="p-4 bg-gradient-to-r from-purple-50 to-pink-50">
                    <h3 className="font-semibold text-lg text-purple-900">{product.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-bold text-purple-700">Rp {product.price.toLocaleString("id-ID")}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-purple-600 hover:text-purple-800 hover:bg-purple-100"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Beli
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-all hover:scale-105"
              >
                Lihat Semua Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Artikel Terbaru
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Temukan informasi terbaru dan tips berguna dari artikel kami.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 stagger-animation">
            {latestArticles.map((article, i) => (
              <Link href={`/articles/${article.id}`} key={article.id}>
                <Card
                  className={`overflow-hidden transition-all hover-lift h-full ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="relative aspect-video overflow-hidden group">
                    <Image
                      alt={article.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      fill
                      src={article.image || "/placeholder.svg"}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4 bg-gradient-to-br from-white to-purple-50">
                    <h3 className="font-semibold text-lg text-purple-900">{article.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center mt-4">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/articles">
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-all hover:scale-105"
              >
                Lihat Semua Artikel
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
