"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ShoppingCart() {
  const [isLoaded, setIsLoaded] = useState(false)
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Smartphone Premium",
      price: 8999000,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100&text=Smartphone",
    },
    {
      id: 2,
      name: "Sneakers Modern",
      price: 1299000,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100&text=Sneakers",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 2499000,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100&text=Smartwatch",
    },
  ])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 15000
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:py-12 bg-gradient-to-b to-white mt-5">

      {cartItems.length === 0 ? (
        <div
          className={`text-center py-12 bg-white rounded-lg shadow-md border border-purple-100 ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
        >
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Keranjang Anda Kosong</h2>
          <p className="text-gray-500 mb-8">Anda belum menambahkan produk ke keranjang.</p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105">
              Mulai Belanja
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className={`lg:col-span-2 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-white rounded-lg shadow-md border border-purple-100 overflow-hidden">
              <div className="overflow-x-auto mt-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-purple-50">
                      <TableHead className="w-[100px]">Produk</TableHead>
                      <TableHead>Nama</TableHead>
                      <TableHead>Harga</TableHead>
                      <TableHead>Jumlah</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id} className="hover:bg-purple-50/50 transition-colors">
                        <TableCell>
                          <div className="relative h-20 w-20 overflow-hidden rounded-md">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </TableCell>
                        <TableCell className="font-medium text-purple-900">{item.name}</TableCell>
                        <TableCell className="text-gray-600">Rp {item.price.toLocaleString("id-ID")}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-r-none border-purple-200 text-purple-600 hover:bg-purple-100"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <div className="flex h-8 w-10 items-center justify-center border-y border-purple-200">
                              {item.quantity}
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-l-none border-purple-200 text-purple-600 hover:bg-purple-100"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium text-purple-900">
                          Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 p-4">
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full min-h-[50px] border-purple-300 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-all hover:scale-105 sm:w-auto"
                  >
                    Lanjutkan Belanja
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full min-h-[50px] border-purple-300 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-all hover:scale-105 sm:w-auto"
                  onClick={() => {
                    // This would typically update quantities from a form
                    // For demo purposes, we'll just show an animation
                    const currentItems = [...cartItems]
                    setCartItems([])
                    setTimeout(() => setCartItems(currentItems), 300)
                  }}
                >
                  Perbarui Keranjang
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-1 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="border rounded-lg p-6 sticky top-20 bg-white shadow-md border-purple-100">
              <h2 className="text-xl font-bold mb-4 text-purple-900">Ringkasan Pesanan</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rp {subtotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pengiriman</span>
                  <span className="font-medium">Rp {shipping.toLocaleString("id-ID")}</span>
                </div>
                <Separator className="bg-purple-100" />
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-purple-900">Total</span>
                  <span className="text-purple-900">Rp {total.toLocaleString("id-ID")}</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <Input
                  placeholder="Kode Promo"
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                />
                <Button className="w-full bg-secondary hover:bg-secondary/90 transition-all hover:scale-105">
                  Terapkan
                </Button>
              </div>

              <Separator className="my-6 bg-purple-100" />

              <Link href="/checkout">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105">
                  Lanjut ke Pembayaran
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}