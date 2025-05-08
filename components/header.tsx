"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, Search, ShoppingCart, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b bg-white/80 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
                  Beranda
                </Link>
                <Link href="/products" className="text-lg font-semibold hover:text-primary transition-colors">
                  Produk
                </Link>
                <Link href="/articles" className="text-lg font-semibold hover:text-primary transition-colors">
                  Artikel
                </Link>
                <Link href="/cart" className="text-lg font-semibold hover:text-primary transition-colors">
                  Keranjang
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-500">
              ShopBlog
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Beranda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Produk
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/articles" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Artikel
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center animate-fade-in">
              <Input
                type="search"
                placeholder="Cari..."
                className="w-[200px] md:w-[300px]"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsSearchOpen(false)
                  setSearchQuery("")
                }}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="hover:bg-primary/10 transition-colors"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-secondary hover:bg-secondary/90 transition-colors">
                3
              </Badge>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
