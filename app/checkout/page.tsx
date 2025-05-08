"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Check, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Checkout() {
  const [step, setStep] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Mock cart items
  const cartItems = [
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
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 15000
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:py-12 bg-gradient-to-b from-purple-50 to-white">
      <h1
        className={`text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
      >
        Checkout
      </h1>

      <div
        className={`flex justify-between mb-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              step >= 1 ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "bg-gray-200"
            }`}
          >
            {step > 1 ? <Check className="h-5 w-5" /> : "1"}
          </div>
          <div className="ml-2 font-medium">Informasi Pengiriman</div>
        </div>
        <div className="h-0.5 w-10 bg-gray-200 self-center"></div>
        <div className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              step >= 2 ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "bg-gray-200"
            }`}
          >
            {step > 2 ? <Check className="h-5 w-5" /> : "2"}
          </div>
          <div className="ml-2 font-medium">Metode Pembayaran</div>
        </div>
        <div className="h-0.5 w-10 bg-gray-200 self-center"></div>
        <div className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              step >= 3 ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "bg-gray-200"
            }`}
          >
            {step > 3 ? <Check className="h-5 w-5" /> : "3"}
          </div>
          <div className="ml-2 font-medium">Konfirmasi</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          className={`lg:col-span-2 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          {step === 1 && (
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md border border-purple-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-purple-900">
                    Nama Depan
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Nama depan"
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-purple-900">
                    Nama Belakang
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Nama belakang"
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-900">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-purple-900">
                  Nomor Telepon
                </Label>
                <Input
                  id="phone"
                  placeholder="08xxxxxxxxxx"
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-purple-900">
                  Alamat
                </Label>
                <Input
                  id="address"
                  placeholder="Alamat lengkap"
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-purple-900">
                    Kota
                  </Label>
                  <Input
                    id="city"
                    placeholder="Kota"
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="province" className="text-purple-900">
                    Provinsi
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="province"
                      className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    >
                      <SelectValue placeholder="Pilih provinsi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jakarta">DKI Jakarta</SelectItem>
                      <SelectItem value="jabar">Jawa Barat</SelectItem>
                      <SelectItem value="jateng">Jawa Tengah</SelectItem>
                      <SelectItem value="jatim">Jawa Timur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode" className="text-purple-900">
                    Kode Pos
                  </Label>
                  <Input
                    id="postalCode"
                    placeholder="Kode pos"
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-purple-900">
                  Catatan (Opsional)
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Catatan tambahan untuk pengiriman"
                  className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>
              <Button
                onClick={() => setStep(2)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105"
              >
                Lanjut ke Pembayaran
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-md border border-purple-100">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-purple-900">Metode Pembayaran</h2>
                <RadioGroup defaultValue="card">
                  <div className="flex items-center space-x-2 border border-purple-200 p-4 rounded-lg hover:bg-purple-50 transition-colors">
                    <RadioGroupItem value="card" id="card" className="text-purple-600 border-purple-400" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                      <CreditCard className="h-5 w-5 text-purple-600" />
                      Kartu Kredit / Debit
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-purple-200 p-4 rounded-lg hover:bg-purple-50 transition-colors">
                    <RadioGroupItem value="bank" id="bank" className="text-purple-600 border-purple-400" />
                    <Label htmlFor="bank" className="cursor-pointer">
                      Transfer Bank
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-purple-200 p-4 rounded-lg hover:bg-purple-50 transition-colors">
                    <RadioGroupItem value="ewallet" id="ewallet" className="text-purple-600 border-purple-400" />
                    <Label htmlFor="ewallet" className="cursor-pointer">
                      E-Wallet
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4 border border-purple-200 p-6 rounded-lg bg-purple-50/50">
                <h3 className="font-medium text-purple-900">Detail Kartu</h3>
                <div className="space-y-2">
                  <Label htmlFor="cardName" className="text-purple-900">
                    Nama pada Kartu
                  </Label>
                  <Input
                    id="cardName"
                    placeholder="Nama lengkap pada kartu"
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-purple-900">
                    Nomor Kartu
                  </Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-purple-900">
                      Tanggal Kadaluarsa
                    </Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-purple-900">
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="border-purple-300 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-all"
                >
                  Kembali
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105"
                >
                  Lanjut ke Konfirmasi
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <Card className="overflow-hidden border-purple-100 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 bg-gradient-to-br from-white to-purple-50">
                  <h2 className="text-xl font-semibold mb-4 text-purple-900">Ringkasan Pesanan</h2>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 hover:bg-white p-2 rounded-lg transition-colors">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-purple-900">{item.name}</h3>
                          <div className="text-sm text-gray-500">Jumlah: {item.quantity}</div>
                        </div>
                        <div className="font-medium text-purple-900">
                          Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-purple-100 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 bg-gradient-to-br from-white to-purple-50">
                  <h2 className="text-xl font-semibold mb-4 text-purple-900">Informasi Pengiriman</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-purple-900">Nama</p>
                      <p className="text-gray-600">John Doe</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-900">Email</p>
                      <p className="text-gray-600">john.doe@example.com</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-900">Telepon</p>
                      <p className="text-gray-600">08123456789</p>
                    </div>
                    <div>
                      <p className="font-medium text-purple-900">Alamat</p>
                      <p className="text-gray-600">Jl. Contoh No. 123, Jakarta Selatan, DKI Jakarta, 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-purple-100 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 bg-gradient-to-br from-white to-purple-50">
                  <h2 className="text-xl font-semibold mb-4 text-purple-900">Metode Pembayaran</h2>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-600">Kartu Kredit / Debit (**** 3456)</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="border-purple-300 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-all"
                >
                  Kembali
                </Button>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 animate-pulse-slow"
                  onClick={() => {
                    // This would typically submit the order
                    // For demo purposes, we'll just show an animation
                    const button = document.activeElement as HTMLButtonElement
                    if (button) {
                      button.disabled = true
                      button.innerText = "Memproses..."
                      setTimeout(() => {
                        button.innerText = "Pesanan Berhasil!"
                        button.classList.remove("animate-pulse-slow")
                        button.classList.add("bg-green-600")
                      }, 2000)
                    }
                  }}
                >
                  Selesaikan Pesanan
                </Button>
              </div>
            </div>
          )}
        </div>

        <div
          className={`lg:col-span-1 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="border rounded-lg p-6 sticky top-20 bg-white shadow-md border-purple-100">
            <h2 className="text-xl font-bold mb-4 text-purple-900">Ringkasan Pesanan</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-medium">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</span>
                </div>
              ))}
              <Separator className="bg-purple-100" />
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
          </div>
        </div>
      </div>
    </div>
  )
}
