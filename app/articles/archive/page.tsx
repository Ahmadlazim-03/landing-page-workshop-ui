"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronLeft, ChevronRight, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ArticleArchive() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedYear, setSelectedYear] = useState("2023")
  const [selectedMonth, setSelectedMonth] = useState("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [viewMode, setViewMode] = useState("grid")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock article data with more details
  const allArticles = [
    {
      id: 1,
      title: "10 Tren Fashion Terbaru 2023",
      excerpt:
        "Temukan tren fashion terbaru yang akan mendominasi tahun 2023, dari vintage revival hingga sustainable fashion.",
      date: "15 Mei 2023",
      month: "Mei",
      year: "2023",
      readTime: "5 menit membaca",
      category: "Gaya Hidup",
      tags: ["Fashion", "Trend", "Style"],
      image: "/placeholder.svg?height=200&width=400&text=Fashion+Trends",
      author: "Sophia Chen",
      views: 1245,
    },
    {
      id: 2,
      title: "Review Gadget Terbaru",
      excerpt: "Ulasan mendalam tentang smartphone, laptop, dan gadget terbaru yang dirilis bulan ini.",
      date: "12 Mei 2023",
      month: "Mei",
      year: "2023",
      readTime: "7 menit membaca",
      category: "Teknologi",
      tags: ["Gadget", "Review", "Tech"],
      image: "/placeholder.svg?height=200&width=400&text=Gadget+Review",
      author: "Alex Johnson",
      views: 2340,
    },
    {
      id: 3,
      title: "Tips Hidup Sehat di Era Digital",
      excerpt: "Bagaimana menjaga kesehatan fisik dan mental di tengah gempuran teknologi dan gaya hidup digital.",
      date: "10 Mei 2023",
      month: "Mei",
      year: "2023",
      readTime: "6 menit membaca",
      category: "Kesehatan",
      tags: ["Health", "Digital", "Wellness"],
      image: "/placeholder.svg?height=200&width=400&text=Health+Tips",
      author: "Dr. Sarah Kim",
      views: 1876,
    },
    {
      id: 4,
      title: "Panduan Memilih Laptop untuk Profesional",
      excerpt: "Tips dan panduan lengkap memilih laptop yang sesuai dengan kebutuhan profesional di berbagai bidang.",
      date: "8 Mei 2023",
      month: "Mei",
      year: "2023",
      readTime: "8 menit membaca",
      category: "Teknologi",
      tags: ["Laptop", "Guide", "Tech"],
      image: "/placeholder.svg?height=200&width=400&text=Laptop+Guide",
      author: "Michael Wong",
      views: 3210,
    },
    {
      id: 5,
      title: "Resep Makanan Sehat untuk Diet",
      excerpt: "Kumpulan resep makanan sehat dan lezat untuk mendukung program diet dan gaya hidup sehat Anda.",
      date: "5 Mei 2023",
      month: "Mei",
      year: "2023",
      readTime: "4 menit membaca",
      category: "Kesehatan",
      tags: ["Recipe", "Diet", "Food"],
      image: "/placeholder.svg?height=200&width=400&text=Healthy+Recipes",
      author: "Emma Rodriguez",
      views: 4521,
    },
    {
      id: 6,
      title: "Tren Dekorasi Rumah Minimalis",
      excerpt: "Inspirasi dekorasi rumah dengan gaya minimalis yang sedang tren untuk hunian modern dan nyaman.",
      date: "3 Mei 2023",
      month: "Mei",
      year: "2023",
      readTime: "5 menit membaca",
      category: "Gaya Hidup",
      tags: ["Home", "Decor", "Minimalist"],
      image: "/placeholder.svg?height=200&width=400&text=Home+Decor",
      author: "Olivia Parker",
      views: 2187,
    },
    {
      id: 7,
      title: "Cara Efektif Mengelola Keuangan Pribadi",
      excerpt: "Panduan praktis mengelola keuangan pribadi untuk mencapai stabilitas finansial dan tujuan keuangan.",
      date: "1 Mei 2023",
      month: "Mei",
      year: "2023",
      readTime: "6 menit membaca",
      category: "Gaya Hidup",
      tags: ["Finance", "Money", "Planning"],
      image: "/placeholder.svg?height=200&width=400&text=Finance+Tips",
      author: "Robert Lee",
      views: 3654,
    },
    {
      id: 8,
      title: "Perbandingan Smartphone Premium 2023",
      excerpt: "Analisis mendalam dan perbandingan fitur smartphone premium terbaru dari berbagai merek ternama.",
      date: "28 April 2023",
      month: "April",
      year: "2023",
      readTime: "9 menit membaca",
      category: "Teknologi",
      tags: ["Smartphone", "Comparison", "Tech"],
      image: "/placeholder.svg?height=200&width=400&text=Smartphone+Comparison",
      author: "David Chen",
      views: 5432,
    },
    {
      id: 9,
      title: "Olahraga Ringan untuk Kesehatan Jantung",
      excerpt: "Rekomendasi olahraga ringan yang dapat dilakukan sehari-hari untuk menjaga kesehatan jantung.",
      date: "25 April 2023",
      month: "April",
      year: "2023",
      readTime: "5 menit membaca",
      category: "Kesehatan",
      tags: ["Exercise", "Heart", "Fitness"],
      image: "/placeholder.svg?height=200&width=400&text=Heart+Health",
      author: "Dr. James Wilson",
      views: 2876,
    },
    {
      id: 10,
      title: "Tren Warna Cat Rumah 2023",
      excerpt: "Panduan lengkap tentang tren warna cat rumah yang populer di tahun 2023 untuk inspirasi renovasi.",
      date: "20 April 2023",
      month: "April",
      year: "2023",
      readTime: "4 menit membaca",
      category: "Gaya Hidup",
      tags: ["Home", "Paint", "Color"],
      image: "/placeholder.svg?height=200&width=400&text=Paint+Colors",
      author: "Jessica Brown",
      views: 1987,
    },
    {
      id: 11,
      title: "Manfaat Meditasi untuk Produktivitas",
      excerpt: "Bagaimana praktik meditasi dapat meningkatkan fokus, kreativitas, dan produktivitas dalam pekerjaan.",
      date: "15 April 2023",
      month: "April",
      year: "2023",
      readTime: "6 menit membaca",
      category: "Kesehatan",
      tags: ["Meditation", "Productivity", "Mindfulness"],
      image: "/placeholder.svg?height=200&width=400&text=Meditation",
      author: "Samantha Lee",
      views: 3421,
    },
    {
      id: 12,
      title: "Panduan Lengkap Fotografi Smartphone",
      excerpt: "Tips dan trik untuk menghasilkan foto profesional hanya dengan menggunakan kamera smartphone Anda.",
      date: "10 April 2023",
      month: "April",
      year: "2023",
      readTime: "8 menit membaca",
      category: "Teknologi",
      tags: ["Photography", "Smartphone", "Tutorial"],
      image: "/placeholder.svg?height=200&width=400&text=Smartphone+Photography",
      author: "Thomas Wright",
      views: 4765,
    },
    {
      id: 13,
      title: "Tren Desain Web 2023",
      excerpt: "Eksplorasi tren desain web terbaru yang akan mendominasi dunia digital di tahun 2023.",
      date: "15 Maret 2023",
      month: "Maret",
      year: "2023",
      readTime: "7 menit membaca",
      category: "Teknologi",
      tags: ["Web Design", "UI/UX", "Trend"],
      image: "/placeholder.svg?height=200&width=400&text=Web+Design",
      author: "Ryan Cooper",
      views: 3876,
    },
    {
      id: 14,
      title: "Panduan Berkebun di Rumah",
      excerpt:
        "Cara mudah memulai dan merawat kebun kecil di rumah untuk pemula, lengkap dengan tips perawatan tanaman.",
      date: "10 Maret 2023",
      month: "Maret",
      year: "2023",
      readTime: "6 menit membaca",
      category: "Gaya Hidup",
      tags: ["Gardening", "Home", "Plants"],
      image: "/placeholder.svg?height=200&width=400&text=Home+Gardening",
      author: "Emily Green",
      views: 2543,
    },
    {
      id: 15,
      title: "Manfaat Yoga untuk Kesehatan Mental",
      excerpt:
        "Bagaimana yoga dapat membantu mengurangi stres, kecemasan, dan meningkatkan kesehatan mental secara keseluruhan.",
      date: "5 Maret 2023",
      month: "Maret",
      year: "2023",
      readTime: "5 menit membaca",
      category: "Kesehatan",
      tags: ["Yoga", "Mental Health", "Wellness"],
      image: "/placeholder.svg?height=200&width=400&text=Yoga+Benefits",
      author: "Dr. Lisa Chen",
      views: 3210,
    },
    {
      id: 16,
      title: "Tren Fashion Musim Semi 2023",
      excerpt: "Panduan lengkap tentang tren fashion musim semi 2023 yang perlu Anda ketahui untuk tampil stylish.",
      date: "15 Februari 2023",
      month: "Februari",
      year: "2023",
      readTime: "6 menit membaca",
      category: "Gaya Hidup",
      tags: ["Fashion", "Spring", "Trend"],
      image: "/placeholder.svg?height=200&width=400&text=Spring+Fashion",
      author: "Sophia Chen",
      views: 4321,
    },
    {
      id: 17,
      title: "Review Headphone Terbaik 2023",
      excerpt: "Perbandingan dan ulasan mendalam tentang headphone terbaik yang tersedia di pasaran tahun 2023.",
      date: "10 Februari 2023",
      month: "Februari",
      year: "2023",
      readTime: "8 menit membaca",
      category: "Teknologi",
      tags: ["Headphones", "Audio", "Review"],
      image: "/placeholder.svg?height=200&width=400&text=Headphone+Review",
      author: "Alex Johnson",
      views: 3654,
    },
    {
      id: 18,
      title: "Panduan Nutrisi untuk Atlet",
      excerpt: "Rekomendasi nutrisi dan pola makan untuk meningkatkan performa dan pemulihan bagi para atlet.",
      date: "5 Februari 2023",
      month: "Februari",
      year: "2023",
      readTime: "7 menit membaca",
      category: "Kesehatan",
      tags: ["Nutrition", "Athletes", "Performance"],
      image: "/placeholder.svg?height=200&width=400&text=Athlete+Nutrition",
      author: "Dr. James Wilson",
      views: 2987,
    },
  ]

  // Extract unique categories, tags, years, and months
  const categories = ["Gaya Hidup", "Teknologi", "Kesehatan"]
  const tags = Array.from(new Set(allArticles.flatMap((article) => article.tags)))
  const years = ["2023", "2022", "2021"]
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]

  // Filter articles based on search, category, year, month, and tags
  const filteredArticles = allArticles.filter((article) => {
    // Search filter
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory

    // Year filter
    const matchesYear = selectedYear === "all" || article.year === selectedYear

    // Month filter
    const matchesMonth = selectedMonth === "all" || article.month === selectedMonth

    // Tags filter
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => article.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesYear && matchesMonth && matchesTags
  })

  // Handle tag selection
  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Group articles by month for timeline view
  const articlesByMonth = filteredArticles.reduce(
    (acc, article) => {
      const key = `${article.month} ${article.year}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(article)
      return acc
    },
    {} as Record<string, typeof allArticles>,
  )

  // Sort months chronologically
  const sortedMonths = Object.keys(articlesByMonth).sort((a, b) => {
    const [aMonth, aYear] = a.split(" ")
    const [bMonth, bYear] = b.split(" ")
    if (aYear !== bYear) return Number(bYear) - Number(aYear)
    return months.indexOf(bMonth) - months.indexOf(aMonth)
  })

  return (
    <div className="container px-4 py-8 md:py-12 bg-gradient-to-b  to-white mt-5">
      <div
        className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
      >
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Arsip Artikel
          </h1>
          <p className="text-gray-500 mt-1">Jelajahi koleksi artikel kami dari waktu ke waktu</p>
        </div>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden border-purple-300 text-purple-600">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="space-y-6 py-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-700">Kategori</h3>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full border-purple-200">
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Semua Kategori</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-700">Periode</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Select value={selectedYear} onValueChange={setSelectedYear}>
                        <SelectTrigger className="w-full border-purple-200">
                          <SelectValue placeholder="Tahun" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Tahun</SelectItem>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                        <SelectTrigger className="w-full border-purple-200">
                          <SelectValue placeholder="Bulan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Bulan</SelectItem>
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-purple-700">Tag</h3>
                  <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
                    {tags.map((tag) => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-tag-${tag}`}
                          checked={selectedTags.includes(tag)}
                          onCheckedChange={() => handleTagToggle(tag)}
                          className="text-purple-600 border-purple-400"
                        />
                        <Label htmlFor={`mobile-tag-${tag}`}>{tag}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="relative">
  
            <Input
              placeholder="Cari artikel..."
              className="pl-10 w-[200px] md:w-[300px] border-purple-200 focus:border-purple-400 focus:ring-purple-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="hidden md:flex border rounded-md overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              className={viewMode === "grid" ? "bg-purple-600" : "hover:bg-purple-100"}
              onClick={() => setViewMode("grid")}
            >
              Grid
            </Button>
            <Button
              variant={viewMode === "timeline" ? "default" : "ghost"}
              size="sm"
              className={viewMode === "timeline" ? "bg-purple-600" : "hover:bg-purple-100"}
              onClick={() => setViewMode("timeline")}
            >
              Timeline
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Filter - Desktop */}
        <div className={`hidden md:block md:col-span-3 space-y-6 ${isLoaded ? "animate-slide-in" : "opacity-0"}`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Kategori</h3>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full border-purple-200">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Periode</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full border-purple-200">
                    <SelectValue placeholder="Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Tahun</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-full border-purple-200">
                    <SelectValue placeholder="Bulan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Bulan</SelectItem>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Tag</h3>
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
              {tags.map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox
                    id={`desktop-tag-${tag}`}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => handleTagToggle(tag)}
                    className="text-purple-600 border-purple-400"
                  />
                  <Label htmlFor={`desktop-tag-${tag}`}>{tag}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Statistik</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Artikel</span>
                <span className="font-medium">{allArticles.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Artikel Ditampilkan</span>
                <span className="font-medium">{filteredArticles.length}</span>
              </div>
              <Separator className="my-2 bg-purple-100" />
              {categories.map((category) => (
                <div key={category} className="flex justify-between">
                  <span className="text-gray-600">{category}</span>
                  <span className="font-medium">
                    {allArticles.filter((article) => article.category === category).length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-9">
          {/* View Mode Tabs (Mobile) */}
          <div className="md:hidden mb-6">
            <Tabs defaultValue="grid" value={viewMode} onValueChange={setViewMode}>
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-700">Tidak ada artikel yang ditemukan</h3>
              <p className="text-gray-500 mt-2">Coba ubah filter atau kata kunci pencarian Anda</p>
            </div>
          ) : viewMode === "grid" ? (
            // Grid View
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
                        src={article.image || "/placeholder.svg"}
                      />
                      <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/60 to-transparent">
                        <div className="flex justify-between items-center">
                          <Badge className="bg-secondary hover:bg-secondary/90">{article.category}</Badge>
                          <div className="text-xs text-white flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {article.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4 bg-gradient-to-br from-white to-purple-50 flex flex-col h-[calc(100%-200px)]">
                      <h3 className="font-semibold text-lg text-purple-900">{article.title}</h3>
                      <p className="text-sm text-gray-500 mt-2 flex-grow line-clamp-3">{article.excerpt}</p>
                      <div className="mt-4 flex flex-wrap gap-1">
                        {article.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            // Timeline View
            <div className={`space-y-12 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
              {sortedMonths.map((monthYear, i) => (
                <div key={monthYear} className="relative">
                  <div className="sticky top-20 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-bold">{monthYear}</h3>
                  </div>
                  <div className="pl-6 border-l-2 border-purple-200 space-y-6">
                    {articlesByMonth[monthYear].map((article, j) => (
                      <Link href={`/articles/${article.id}`} key={article.id}>
                        <Card
                          className={`overflow-hidden transition-all hover-lift hover:border-purple-300 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                          style={{ animationDelay: `${0.2 + j * 0.05}s` }}
                        >
                          <div className="relative">
                            <div className="absolute -left-[38px] top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full bg-purple-600 border-4 border-white"></div>
                          </div>
                          <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                            <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0 rounded-lg overflow-hidden">
                              <Image
                                alt={article.title}
                                className="object-cover"
                                fill
                                src={article.image || "/placeholder.svg"}
                              />
                            </div>
                            <div className="flex-grow">
                              <div className="flex flex-wrap gap-2 mb-2">
                                <Badge className="bg-secondary hover:bg-secondary/90">{article.category}</Badge>
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {article.date}
                                </div>
                              </div>
                              <h3 className="font-semibold text-lg text-purple-900 mb-2">{article.title}</h3>
                              <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
                              <div className="mt-3 flex flex-wrap gap-1">
                                {article.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredArticles.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" disabled className="border-purple-300 text-purple-400">
                  <ChevronLeft className="h-4 w-4" />
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
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
