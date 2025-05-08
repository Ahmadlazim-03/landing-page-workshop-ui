"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function ProductCatalog() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("newest")

  // Mock product data with categories
  const allProducts = [
    {
      id: 1,
      name: "Smartphone Premium",
      description: "Smartphone canggih dengan kamera 108MP dan baterai tahan lama",
      price: 8999000,
      category: "Elektronik",
      image: "/placeholder.svg?height=300&width=300&text=Smartphone",
    },
    {
      id: 2,
      name: "Sneakers Modern",
      description: "Sepatu sneakers nyaman dengan desain modern dan stylish",
      price: 1299000,
      category: "Fashion",
      image: "/placeholder.svg?height=300&width=300&text=Sneakers",
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Jam tangan pintar dengan fitur kesehatan dan notifikasi",
      price: 2499000,
      category: "Elektronik",
      image: "/placeholder.svg?height=300&width=300&text=Smartwatch",
    },
    {
      id: 4,
      name: "Headphone Wireless",
      description: "Headphone nirkabel dengan noise cancelling dan suara premium",
      price: 1899000,
      category: "Elektronik",
      image: "/placeholder.svg?height=300&width=300&text=Headphone",
    },
    {
      id: 5,
      name: "Blender Multifungsi",
      description: "Blender dengan berbagai fungsi untuk kebutuhan dapur Anda",
      price: 899000,
      category: "Rumah Tangga",
      image: "/placeholder.svg?height=300&width=300&text=Blender",
    },
    {
      id: 6,
      name: "Kemeja Formal",
      description: "Kemeja formal dengan bahan premium untuk acara penting",
      price: 599000,
      category: "Fashion",
      image: "/placeholder.svg?height=300&width=300&text=Kemeja",
    },
    {
      id: 7,
      name: "Vitamin Harian",
      description: "Suplemen vitamin untuk menjaga kesehatan tubuh setiap hari",
      price: 299000,
      category: "Kesehatan",
      image: "/placeholder.svg?height=300&width=300&text=Vitamin",
    },
    {
      id: 8,
      name: "Laptop Ultrabook",
      description: "Laptop tipis dan ringan dengan performa tinggi",
      price: 12999000,
      category: "Elektronik",
      image: "/placeholder.svg?height=300&width=300&text=Laptop",
    },
    {
      id: 9,
      name: "Kursi Ergonomis",
      description: "Kursi dengan desain ergonomis untuk kenyamanan bekerja",
      price: 1999000,
      category: "Rumah Tangga",
      image: "/placeholder.svg?height=300&width=300&text=Kursi",
    },
    {
      id: 10,
      name: "Tas Ransel",
      description: "Tas ransel multifungsi untuk kegiatan sehari-hari",
      price: 799000,
      category: "Fashion",
      image: "/placeholder.svg?height=300&width=300&text=Ransel",
    },
    {
      id: 11,
      name: "Alat Pengukur Tekanan Darah",
      description: "Alat untuk memantau tekanan darah dengan akurat",
      price: 499000,
      category: "Kesehatan",
      image: "/placeholder.svg?height=300&width=300&text=Tensimeter",
    },
    {
      id: 12,
      name: "Set Panci Premium",
      description: "Set panci dengan kualitas premium untuk memasak",
      price: 2499000,
      category: "Rumah Tangga",
      image: "/placeholder.svg?height=300&width=300&text=Panci",
    },
  ]

  const categories = ["Fashion", "Elektronik", "Rumah Tangga", "Kesehatan"]
  const priceRanges = ["< Rp 500.000", "Rp 500.000 - Rp 2.000.000", "> Rp 2.000.000"]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Filter products based on search, categories, and price ranges
  const filteredProducts = allProducts.filter((product) => {
    // Search filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)

    // Price filter
    let matchesPrice = true
    if (selectedPriceRanges.length > 0) {
      matchesPrice = false
      for (const range of selectedPriceRanges) {
        if (range === "< Rp 500.000" && product.price < 500000) {
          matchesPrice = true
          break
        } else if (range === "Rp 500.000 - Rp 2.000.000" && product.price >= 500000 && product.price <= 2000000) {
          matchesPrice = true
          break
        } else if (range === "> Rp 2.000.000" && product.price > 2000000) {
          matchesPrice = true
          break
        }
      }
    }

    return matchesSearch && matchesCategory && matchesPrice
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") {
      return a.price - b.price
    } else if (sortOption === "price-high") {
      return b.price - a.price
    } else {
      // Default: newest (by id in reverse)
      return b.id - a.id
    }
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRanges((prev) => (prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]))
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div
        className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
      >
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Katalog Produk
          </h1>
          <p className="text-gray-500 mt-1">Temukan produk berkualitas untuk kebutuhan Anda</p>
        </div>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden border-purple-600 text-purple-600 hover:bg-purple-100">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="space-y-6 py-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-700">Kategori</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                          className="text-purple-600 border-purple-400"
                        />
                        <Label htmlFor={`category-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-700">Harga</h3>
                  <div className="space-y-3">
                    {priceRanges.map((price) => (
                      <div key={price} className="flex items-center space-x-2">
                        <Checkbox
                          id={`price-${price}`}
                          checked={selectedPriceRanges.includes(price)}
                          onCheckedChange={() => handlePriceRangeChange(price)}
                          className="text-purple-600 border-purple-400"
                        />
                        <Label htmlFor={`price-${price}`}>{price}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1 md:max-w-xs">
            <Input
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
            />
          </div>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px] border-purple-200 focus:border-purple-400 focus:ring-purple-400">
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Terbaru</SelectItem>
              <SelectItem value="price-low">Harga: Rendah ke Tinggi</SelectItem>
              <SelectItem value="price-high">Harga: Tinggi ke Rendah</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Filter - Desktop */}
        <div className={`hidden md:block md:col-span-3 space-y-6 ${isLoaded ? "animate-slide-in" : "opacity-0"}`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Kategori</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`desktop-category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                    className="text-purple-600 border-purple-400"
                  />
                  <Label htmlFor={`desktop-category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Harga</h3>
            <div className="space-y-3">
              {priceRanges.map((price) => (
                <div key={price} className="flex items-center space-x-2">
                  <Checkbox
                    id={`desktop-price-${price}`}
                    checked={selectedPriceRanges.includes(price)}
                    onCheckedChange={() => handlePriceRangeChange(price)}
                    className="text-purple-600 border-purple-400"
                  />
                  <Label htmlFor={`desktop-price-${price}`}>{price}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-9">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-700">Tidak ada produk yang ditemukan</h3>
              <p className="text-gray-500 mt-2">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
              {sortedProducts.map((product, i) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <Card
                    className={`overflow-hidden transition-all hover-lift ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                    style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                  >
                    <div className="relative aspect-square overflow-hidden group">
                      <Image
                        alt={product.name}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        fill
                        src={product.image || "/placeholder.svg"}
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                          {product.category}
                        </span>
                      </div>
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
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-purple-700">Rp {product.price.toLocaleString("id-ID")}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-purple-400 text-purple-600 hover:bg-purple-100"
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
          )}
        </div>
      </div>
    </div>
  )
}
