"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ArticleCalendar() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(4) // May (0-indexed)
  const [currentYear, setCurrentYear] = useState(2023)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock article data
  const allArticles = [
    {
      id: 1,
      title: "10 Tren Fashion Terbaru 2023",
      excerpt: "Temukan tren fashion terbaru yang akan mendominasi tahun 2023.",
      date: "15 Mei 2023",
      day: 15,
      month: 4, // May (0-indexed)
      year: 2023,
      category: "Gaya Hidup",
      image: "/artikel/logo1.png",
    },
    {
      id: 2,
      title: "Review Gadget Terbaru",
      excerpt: "Ulasan mendalam tentang smartphone, laptop, dan gadget terbaru.",
      date: "12 Mei 2023",
      day: 12,
      month: 4, // May (0-indexed)
      year: 2023,
      category: "Teknologi",
      image: "/artikel/logo2.png",
    },
    {
      id: 3,
      title: "Tips Hidup Sehat di Era Digital",
      excerpt: "Bagaimana menjaga kesehatan fisik dan mental di tengah gempuran teknologi.",
      date: "10 Mei 2023",
      day: 10,
      month: 4, // May (0-indexed)
      year: 2023,
      category: "Kesehatan",
      image: "/artikel/logo3.png",
    },
    {
      id: 4,
      title: "Panduan Memilih Laptop untuk Profesional",
      excerpt: "Tips dan panduan lengkap memilih laptop yang sesuai dengan kebutuhan profesional.",
      date: "8 Mei 2023",
      day: 8,
      month: 4, // May (0-indexed)
      year: 2023,
      category: "Teknologi",
      image: "/artikel/logo4.png",
    },
    {
      id: 5,
      title: "Resep Makanan Sehat untuk Diet",
      excerpt: "Kumpulan resep makanan sehat dan lezat untuk mendukung program diet.",
      date: "5 Mei 2023",
      day: 5,
      month: 4, // May (0-indexed)
      year: 2023,
      category: "Kesehatan",
      image: "/artikel/logo5.png",
    },
    {
      id: 6,
      title: "Tren Dekorasi Rumah Minimalis",
      excerpt: "Inspirasi dekorasi rumah dengan gaya minimalis yang sedang tren.",
      date: "3 Mei 2023",
      day: 3,
      month: 4, // May (0-indexed)
      year: 2023,
      category: "Gaya Hidup",
      image: "/artikel/logo6.png",
    },
    {
      id: 7,
      title: "Cara Efektif Mengelola Keuangan Pribadi",
      excerpt: "Panduan praktis mengelola keuangan pribadi untuk mencapai stabilitas finansial.",
      date: "1 Mei 2023",
      day: 1,
      month: 4, // May (0-indexed)
      year: 2023,
      category: "Gaya Hidup",
      image: "/artikel/logo7.png",
    },
    {
      id: 8,
      title: "Perbandingan Smartphone Premium 2023",
      excerpt: "Analisis mendalam dan perbandingan fitur smartphone premium terbaru.",
      date: "28 April 2023",
      day: 28,
      month: 3, // April (0-indexed)
      year: 2023,
      category: "Teknologi",
      image: "/artikel/logo8.png",
    },
    {
      id: 9,
      title: "Olahraga Ringan untuk Kesehatan Jantung",
      excerpt: "Rekomendasi olahraga ringan yang dapat dilakukan sehari-hari.",
      date: "25 April 2023",
      day: 25,
      month: 3, // April (0-indexed)
      year: 2023,
      category: "Kesehatan",
      image: "/artikel/logo9.png",
    },
  ]

  // Filter articles for the current month and year
  const filteredArticles = allArticles.filter(
    (article) => article.month === currentMonth && article.year === currentYear,
  )

  // Group articles by day
  const articlesByDay = filteredArticles.reduce(
    (acc, article) => {
      if (!acc[article.day]) {
        acc[article.day] = []
      }
      acc[article.day].push(article)
      return acc
    },
    {} as Record<number, typeof allArticles>,
  )

  // Generate calendar days
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth)
  const monthNames = [
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

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const years = [2021, 2022, 2023, 2024]

  return (
    <div className="container px-4 py-8 md:py-12 bg-gradient-to-b to-white mt-5">
      <div
        className={`flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Kalender Artikel
          </h1>
          <p className="text-gray-500 mt-1">Jelajahi artikel kami berdasarkan tanggal publikasi</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/articles/archive">
            <Button
              variant="outline"
              className="border-purple-300 text-purple-600 hover:bg-purple-100"
            >
              Lihat Arsip
            </Button>
          </Link>
          <Link href="/articles">
            <Button
              variant="outline"
              className="border-purple-300 text-purple-600 hover:bg-purple-100"
            >
              Lihat Semua Artikel
            </Button>
          </Link>
        </div>
      </div>

      {/* Calendar Header */}
      <div
        className={`bg-white p-3 md:p-6 rounded-lg shadow-md border border-purple-100 mb-8 ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-3 md:mb-6 gap-2 md:gap-0">
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="outline"
              size="icon"
              className="border-purple-300 text-purple-600 hover:bg-purple-100"
              onClick={prevMonth}
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <h2 className="text-lg md:text-xl font-bold text-purple-900">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <Button
              variant="outline"
              size="icon"
              className="border-purple-300 text-purple-600 hover:bg-purple-100"
              onClick={nextMonth}
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
            <Select
              value={currentMonth.toString()}
              onValueChange={(value) => setCurrentMonth(Number.parseInt(value))}
            >
              <SelectTrigger className="w-full md:w-[150px] border-purple-200">
                <SelectValue placeholder="Pilih bulan" />
              </SelectTrigger>
              <SelectContent>
                {monthNames.map((month, index) => (
                  <SelectItem key={month} value={index.toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={currentYear.toString()}
              onValueChange={(value) => setCurrentYear(Number.parseInt(value))}
            >
              <SelectTrigger className="w-full md:w-[100px] border-purple-200 mt-2 md:mt-0">
                <SelectValue placeholder="Pilih tahun" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 md:grid-cols-7 gap-1 md:gap-2">
          {/* Day names */}
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <div
              key={day}
              className="text-center font-medium text-purple-900 py-1 md:py-2 text-xs md:text-base"
            >
              {day}
            </div>
          ))}

          {/* Empty cells for days before the first day of the month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="h-16 md:h-24 bg-gray-50 rounded-lg"></div>
          ))}

          {/* Calendar days */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const hasArticles = articlesByDay[day]?.length > 0
            return (
              <div
                key={`day-${day}`}
                className={`h-16 md:h-24 p-1 md:p-2 rounded-lg border ${
                  hasArticles ? "border-purple-200 bg-purple-50" : "border-gray-100"
                } overflow-y-auto text-xs md:text-sm`}
              >
                <div className="text-right font-medium text-gray-700 mb-1">{day}</div>
                {hasArticles && (
                  <div className="space-y-1">
                    {articlesByDay[day].map((article) => (
                      <Link href={`/articles/${article.id}`} key={article.id}>
                        <div className="text-xs p-1 bg-white rounded border border-purple-100 hover:bg-purple-100 transition-colors truncate">
                          {article.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Articles for Selected Month */}
      <div
        className={`space-y-6 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.3s" }}
      >
        <h2 className="text-xl font-bold text-purple-900">
          Artikel di {monthNames[currentMonth]} {currentYear}
        </h2>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-purple-100">
            <CalendarIcon className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Tidak ada artikel di bulan ini</h3>
            <p className="text-gray-500 mt-2">Coba pilih bulan atau tahun yang berbeda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            {filteredArticles.map((article, i) => (
              <Link href={`/articles/${article.id}`} key={article.id}>
                <Card
                  className={`overflow-hidden transition-all hover-lift ${
                    isLoaded ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.4 + i * 0.05}s` }}
                >
                  <div className="relative aspect-video overflow-hidden group">
                    <Image
                      alt={article.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      fill
                      src={article.image || "/artikel/logo1.png"}
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-secondary hover:bg-secondary/90">{article.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 bg-gradient-to-br from-white to-purple-50">
                    <div className="text-sm text-purple-600 mb-2">{article.date}</div>
                    <h3 className="font-semibold text-lg text-purple-900">{article.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{article.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}