"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Facebook, Instagram, Twitter, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const articleId = params.id
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock article data
  const article = {
    id: articleId,
    title: `Judul Artikel ${articleId}`,
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nisl nisi aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, diam quis aliquam tincidunt, nisl nisi aliquam nunc, vitae aliquam nisl nunc vitae nisl.</p>
      <p>Proin ac quam et lectus vestibulum blandit. Suspendisse quis suscipit nisi, ut consectetur diam. Sed egestas tortor nec lectus consectetur ullamcorper. Vestibulum feugiat feugiat egestas. Curabitur ut ultricies est. Nullam vel tincidunt erat, quis iaculis risus. Vivamus at elit mi. Aliquam in dictum nibh, a blandit dolor.</p>
      <h2>Sub Judul Artikel</h2>
      <p>Proin ac quam et lectus vestibulum blandit. Suspendisse quis suscipit nisi, ut consectetur diam. Sed egestas tortor nec lectus consectetur ullamcorper. Vestibulum feugiat feugiat egestas. Curabitur ut ultricies est. Nullam vel tincidunt erat, quis iaculis risus. Vivamus at elit mi. Aliquam in dictum nibh, a blandit dolor.</p>
      <p>Proin ac quam et lectus vestibulum blandit. Suspendisse quis suscipit nisi, ut consectetur diam. Sed egestas tortor nec lectus consectetur ullamcorper. Vestibulum feugiat feugiat egestas. Curabitur ut ultricies est. Nullam vel tincidunt erat, quis iaculis risus. Vivamus at elit mi. Aliquam in dictum nibh, a blandit dolor.</p>
      <h2>Sub Judul Artikel Lainnya</h2>
      <p>Proin ac quam et lectus vestibulum blandit. Suspendisse quis suscipit nisi, ut consectetur diam. Sed egestas tortor nec lectus consectetur ullamcorper. Vestibulum feugiat feugiat egestas. Curabitur ut ultricies est. Nullam vel tincidunt erat, quis iaculis risus. Vivamus at elit mi. Aliquam in dictum nibh, a blandit dolor.</p>
      <p>Proin ac quam et lectus vestibulum blandit. Suspendisse quis suscipit nisi, ut consectetur diam. Sed egestas tortor nec lectus consectetur ullamcorper. Vestibulum feugiat feugiat egestas. Curabitur ut ultricies est. Nullam vel tincidunt erat, quis iaculis risus. Vivamus at elit mi. Aliquam in dictum nibh, a blandit dolor.</p>
    `,
    date: "12 Mei 2023",
    readTime: "5 menit membaca",
    author: "John Doe",
    category: "Gaya Hidup",
    image: `/placeholder.svg?height=400&width=800&text=Artikel+${articleId}`,
    tags: ["Lifestyle", "Fashion", "Trend"],
  }

  // Mock related articles
  const relatedArticles = Array.from({ length: 3 }, (_, i) => ({
    id: Number(articleId) + i + 1,
    title: `Judul Artikel ${Number(articleId) + i + 1}`,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt.",
    date: "14 Mei 2023",
    readTime: "4 menit membaca",
    image: `/placeholder.svg?height=200&width=400&text=Artikel+${Number(articleId) + i + 1}`,
  }))

  return (
    <div className="container px-4 py-8 md:py-12 bg-gradient-to-b  to-white mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          className={`lg:col-span-2 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4 mt-3">
              <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-purple-500" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-purple-500" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-purple-500" />
                {article.readTime}
              </div>
            </div>
          </div>

          <div className="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div
            className="prose max-w-none mb-8 bg-white p-6 rounded-lg shadow-sm border border-purple-100"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <Link href={`/articles?tag=${tag}`} key={tag}>
                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition-colors">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg mb-8">
            <div className="text-sm font-medium text-purple-900">Bagikan artikel ini</div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Facebook className="h-5 w-5 hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Twitter className="h-5 w-5 hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Instagram className="h-5 w-5 hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`lg:col-span-1 ${isLoaded ? "animate-slide-in" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="sticky top-20">
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-purple-900">Artikel Terkait</h3>
              <div className="space-y-4 stagger-animation">
                {relatedArticles.map((article, i) => (
                  <Link href={`/articles/${article.id}`} key={article.id}>
                    <Card
                      className={`overflow-hidden transition-all hover-lift ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                      style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden group">
                        <Image
                          alt={article.title}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          fill
                          src={article.image || "/placeholder.svg"}
                        />
                      </div>
                      <CardContent className="p-4 bg-gradient-to-br from-white to-purple-50">
                        <h4 className="font-semibold text-purple-900">{article.title}</h4>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <span>{article.date}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
              <h3 className="text-lg font-bold mb-4 text-purple-900">Kategori</h3>
              <div className="space-y-2">
                {["Gaya Hidup", "Teknologi", "Kesehatan", "Bisnis", "Pendidikan"].map((category) => (
                  <Link href={`/articles?category=${category}`} key={category}>
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-50 transition-colors">
                      <span className="text-gray-600 hover:text-purple-700 transition-colors">{category}</span>
                      <span className="text-sm text-purple-500 bg-purple-100 px-2 py-0.5 rounded-full">12</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
