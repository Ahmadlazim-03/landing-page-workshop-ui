"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function ArticleArchive() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock article data
  const allArticles = [
    {
      id: 1,
      title: "10 Tren Fashion Terbaru 2023",
      excerpt:
        "Temukan tren fashion terbaru yang akan mendominasi tahun 2023, dari vintage revival hingga sustainable fashion.",
      date: "15 Mei 2023",
      readTime: "5 menit membaca",
      category: "Gaya Hidup",
      image: "/artikel/logo1.png",
    },
    {
      id: 2,
      title: "Review Gadget Terbaru",
      excerpt: "Ulasan mendalam tentang smartphone, laptop, dan gadget terbaru yang dirilis bulan ini.",
      date: "12 Mei 2023",
      readTime: "7 menit membaca",
      category: "Teknologi",
      image: "/artikel/logo2.png",
    },
    {
      id: 3,
      title: "Tips Hidup Sehat di Era Digital",
      excerpt: "Bagaimana menjaga kesehatan fisik dan mental di tengah gempuran teknologi dan gaya hidup digital.",
      date: "10 Mei 2023",
      readTime: "6 menit membaca",
      category: "Kesehatan",
      image: "/artikel/logo3.png",
    },
    {
      id: 4,
      title: "Panduan Memilih Laptop untuk Profesional",
      excerpt: "Tips dan panduan lengkap memilih laptop yang sesuai dengan kebutuhan profesional di berbagai bidang.",
      date: "8 Mei 2023",
      readTime: "8 menit membaca",
      category: "Teknologi",
      image: "/artikel/logo4.png",
    },
    {
      id: 5,
      title: "Resep Makanan Sehat untuk Diet",
      excerpt: "Kumpulan resep makanan sehat dan lezat untuk mendukung program diet dan gaya hidup sehat Anda.",
      date: "5 Mei 2023",
      readTime: "4 menit membaca",
      category: "Kesehatan",
      image: "/artikel/logo5.png",
    },
    {
      id: 6,
      title: "Tren Dekorasi Rumah Minimalis",
      excerpt: "Inspirasi dekorasi rumah dengan gaya minimalis yang sedang tren untuk hunian modern dan nyaman.",
      date: "3 Mei 2023",
      readTime: "5 menit membaca",
      category: "Gaya Hidup",
      image: "/artikel/logo6.png",
    },
    {
      id: 7,
      title: "Cara Efektif Mengelola Keuangan Pribadi",
      excerpt: "Panduan praktis mengelola keuangan pribadi untuk mencapai stabilitas finansial dan tujuan keuangan.",
      date: "1 Mei 2023",
      readTime: "6 menit membaca",
      category: "Gaya Hidup",
      image: "/artikel/logo7.png",
    },
    {
      id: 8,
      title: "Perbandingan Smartphone Premium 2023",
      excerpt: "Analisis mendalam dan perbandingan fitur smartphone premium terbaru dari berbagai merek ternama.",
      date: "28 April 2023",
      readTime: "9 menit membaca",
      category: "Teknologi",
      image: "/artikel/logo8.png",
    },
    {
      id: 9,
      title: "Olahraga Ringan untuk Kesehatan Jantung",
      excerpt: "Rekomendasi olahraga ringan yang dapat dilakukan sehari-hari untuk menjaga kesehatan jantung.",
      date: "25 April 2023",
      readTime: "5 menit membaca",
      category: "Kesehatan",
      image: "/artikel/logo9.png",
    },
  ]

  // Filter articles based on search and category
  const filteredArticles = allArticles.filter((article) => {
    // Search filter
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container px-4 py-8 md:py-12 bg-gradient-to-b to-white mt-5">
      <div
        className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
      >
        <div>
          <p className="text-gray-500 mt-1">Temukan informasi terbaru dan tips berguna</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/articles/archive">
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all hover:scale-105"
            >
              Arsip Artikel
            </Button>
          </Link>
          <Input
            placeholder="Cari artikel..."
            className="w-full sm:w-[250px] border-purple-200 focus:border-purple-400 focus:ring-purple-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px] border-purple-200 focus:border-purple-400 focus:ring-purple-400">
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              <SelectItem value="Gaya Hidup">Gaya Hidup</SelectItem>
              <SelectItem value="Teknologi">Teknologi</SelectItem>
              <SelectItem value="Kesehatan">Kesehatan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-purple-100">
          <h3 className="text-xl font-semibold text-gray-700">Tidak ada artikel yang ditemukan</h3>
          <p className="text-gray-500 mt-2">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {filteredArticles.map((article, i) => (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <Card
                className={`overflow-hidden transition-all hover-lift h-full ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
              >
                <div className="relative aspect-video overflow-hidden group">
                  <Image
                    alt={article.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    src={article.image || "/artikel/logo1.png"}
                  />
                </div>
                <CardContent className="p-4 bg-gradient-to-br from-white to-purple-50 flex flex-col h-[calc(100%-200px)]">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-purple-900">{article.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 flex-grow line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-3 text-xs text-gray-400 mb-2">
                    <span>{article.date}</span>
                    <span className="mx-1">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-2 lg:mb-4">
          <Button variant="outline" size="icon" disabled className="border-purple-300 text-purple-400">
            &lt;
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-primary text-primary-foreground border-primary hover:bg-primary/90"
          >
            1
          </Button>
          <Button variant="outline" size="icon" className="border-purple-300 text-purple-700 hover:bg-purple-100">
            2
          </Button>
          <Button variant="outline" size="icon" className="border-purple-300 text-purple-700 hover:bg-purple-100">
            3
          </Button>
          <Button variant="outline" size="icon" className="border-purple-300 text-purple-700 hover:bg-purple-100">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  )
}